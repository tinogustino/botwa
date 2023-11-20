/*
   BASE ORI ARXZY DEV
   SC MYOKU GEN 2 TERBARU 
   SUPPORT PAIRING CODE & NO ENC YGY
   
   INGIN MEMBELI PANEL? 
   
   LIST HARGA PANEL 
   2 GB = 3000
   4 GB = 5000
   8 GB = 7000
   UNLIMITED = 10.000
   ADMIN PANEL = 15.000
   HUBUNGI : 085813708397
   
   
   My Contact wa.me/6285813708397
*/

require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: myokuConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
         
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
async function startMyoku() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(`./session`)

    const myoku = myokuConnect({
        logger: pino({
            level: 'silent'
        }),
        printQRInTerminal: true,
        browser: ['Myoku Multi Device', 'Safari', '1.0.0'],
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
        auth: state
    })

    store.bind(myoku.ev)
    
    myoku.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!myoku.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return
            m = smsg(myoku, mek, store)
            require("./myoku2")(myoku, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   
    myoku.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    myoku.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = myoku.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    myoku.getName = (jid, withoutContact = false) => {
        id = myoku.decodeJid(jid)
        withoutContact = myoku.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = myoku.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === myoku.decodeJid(myoku.user.id) ?
            myoku.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    myoku.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	       let list = []
	       for (let i of kon) {
	           list.push({
	    	          displayName: await myoku.getName(i + '@s.whatsapp.net'),
	    	          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await myoku.getName(i + '@s.whatsapp.net')}\nFN:${await myoku.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:creator@myokudev.xyz\nitem2.X-ABLabel:Email\nitem3.URL:https://profile.myokudev.xyz\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	          })
	       }
	       myoku.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }

    myoku.public = true

    myoku.serializeM = (m) => smsg(myoku, m, store)

    myoku.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        try {
            if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output.statusCode
                if (reason === DisconnectReason.badSession) {
                    console.log(`Bad Session File, Please Delete Session and Scan Again`);
                    startMyoku()
                } else if (reason === DisconnectReason.connectionClosed) {
                    console.log("Connection closed, reconnecting....");
                    startMyoku();
                } else if (reason === DisconnectReason.connectionLost) {
                    console.log("Connection Lost from Server, reconnecting...");
                    startMyoku();
                } else if (reason === DisconnectReason.connectionReplaced) {
                    console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                    startMyoku()
                } else if (reason === DisconnectReason.loggedOut) {
                    console.log(`Device Logged Out, Please Scan Again And Run.`);
                    startMyoku();
                } else if (reason === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    startMyoku();
                } else if (reason === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    startMyoku();
                } else myoku.end(`Unknown DisconnectReason: ${reason}|${connection}`)
            }
            if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
                console.log(`[Sedang mengkoneksikan]`)
            }
            if (update.connection == "open" || update.receivedPendingNotifications == "true") {
                console.log(`[Connecting to] WhatsApp web`)
                console.log(`[Connected] ` + JSON.stringify(myoku.user, null, 2))
            }

        } catch (err) {
            console.log('Error Di Connection.update ' + err)
            startMyoku();
        }

    })

    myoku.ev.on('creds.update', saveCreds)

    myoku.sendText = (jid, text, quoted = '', options) => myoku.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    myoku.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await myoku.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    myoku.sendTextWithMentions = async (jid, text, quoted, options = {}) => myoku.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    myoku.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await myoku.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    myoku.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await myoku.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    myoku.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    myoku.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return myoku
}

startMyoku()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
