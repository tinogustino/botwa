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
   
   Sory Di Enc Masih Langka Ini Beda Dari Lain
*/
const _0x396f51=_0x3314;(function(_0x5f11f3,_0x5c98b4){const _0x37be29=_0x3314,_0x423b1e=_0x5f11f3();while(!![]){try{const _0x109368=-parseInt(_0x37be29(0x21a))/0x1*(-parseInt(_0x37be29(0x211))/0x2)+-parseInt(_0x37be29(0x1c2))/0x3+-parseInt(_0x37be29(0x1e9))/0x4+parseInt(_0x37be29(0x20b))/0x5+-parseInt(_0x37be29(0x21b))/0x6+parseInt(_0x37be29(0x206))/0x7+parseInt(_0x37be29(0x1d2))/0x8*(parseInt(_0x37be29(0x1da))/0x9);if(_0x109368===_0x5c98b4)break;else _0x423b1e['push'](_0x423b1e['shift']());}catch(_0x430bfa){_0x423b1e['push'](_0x423b1e['shift']());}}}(_0x4e0e,0x74ae1),require(_0x396f51(0x1e4)));const pino=require(_0x396f51(0x214)),{Boom}=require(_0x396f51(0x209)),fs=require('fs'),chalk=require(_0x396f51(0x1e1)),FileType=require(_0x396f51(0x1fa)),readline=require('readline'),path=require('path'),axios=require(_0x396f51(0x202)),PhoneNumber=require(_0x396f51(0x1b5)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x396f51(0x1d0)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require(_0x396f51(0x1b3)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x396f51(0x1dd)),usePairingCode=!![],store=makeInMemoryStore({'logger':pino()['child']({'level':_0x396f51(0x218),'stream':_0x396f51(0x1f0)})}),question=_0x31b8f6=>{const _0x2314b1=_0x396f51,_0x30a618=readline[_0x2314b1(0x1e5)]({'input':process[_0x2314b1(0x1db)],'output':process[_0x2314b1(0x1d6)]});return new Promise(_0x162d15=>{const _0x1c2878=_0x2314b1;_0x30a618[_0x1c2878(0x1bc)](_0x31b8f6,_0x162d15);});};function _0x3314(_0x77f91d,_0xda9c10){const _0x4e0e7a=_0x4e0e();return _0x3314=function(_0x331480,_0x14d2ce){_0x331480=_0x331480-0x1ae;let _0x17fbde=_0x4e0e7a[_0x331480];return _0x17fbde;},_0x3314(_0x77f91d,_0xda9c10);}async function startMyoku(){const _0x4dad41=_0x396f51,{state:_0x1e9b8a,saveCreds:_0x368ebe}=await useMultiFileAuthState(_0x4dad41(0x1f4)),_0x4cb2f2=makeWASocket({'logger':pino({'level':_0x4dad41(0x218)}),'printQRInTerminal':!usePairingCode,'auth':_0x1e9b8a,'browser':[_0x4dad41(0x1b2),'','']});if(usePairingCode&&!_0x4cb2f2[_0x4dad41(0x1e8)][_0x4dad41(0x1ff)][_0x4dad41(0x1b6)]){const _0x5da46d=await question(_0x4dad41(0x1de)),_0x405e54=await _0x4cb2f2['requestPairingCode'](_0x5da46d['trim']());console[_0x4dad41(0x208)](_0x4dad41(0x1fb)+_0x405e54);}return store['bind'](_0x4cb2f2['ev']),_0x4cb2f2['ev']['on'](_0x4dad41(0x223),async _0x4d3313=>{const _0x30b256=_0x4dad41;try{mek=_0x4d3313[_0x30b256(0x1fd)][0x0];if(!mek[_0x30b256(0x1f1)])return;mek['message']=Object['keys'](mek[_0x30b256(0x1f1)])[0x0]===_0x30b256(0x1c6)?mek['message'][_0x30b256(0x1c6)][_0x30b256(0x1f1)]:mek[_0x30b256(0x1f1)];if(mek[_0x30b256(0x203)]&&mek[_0x30b256(0x203)][_0x30b256(0x1b1)]===_0x30b256(0x1d1))return;if(!_0x4cb2f2['public']&&!mek['key'][_0x30b256(0x1eb)]&&_0x4d3313[_0x30b256(0x1ee)]===_0x30b256(0x1bd))return;if(mek[_0x30b256(0x203)]['id'][_0x30b256(0x1bb)](_0x30b256(0x201))&&mek[_0x30b256(0x203)]['id'][_0x30b256(0x1e3)]===0x10)return;if(mek[_0x30b256(0x203)]['id'][_0x30b256(0x1bb)](_0x30b256(0x1dc)))return;m=smsg(_0x4cb2f2,mek,store),require('./myoku')(_0x4cb2f2,m,_0x4d3313,store);}catch(_0x54567e){console[_0x30b256(0x208)](_0x54567e);}}),_0x4cb2f2[_0x4dad41(0x224)]=_0x28aaec=>{const _0x319e28=_0x4dad41;if(!_0x28aaec)return _0x28aaec;if(/:\d+@/gi['test'](_0x28aaec)){let _0x565ce2=jidDecode(_0x28aaec)||{};return _0x565ce2['user']&&_0x565ce2[_0x319e28(0x1c9)]&&_0x565ce2['user']+'@'+_0x565ce2[_0x319e28(0x1c9)]||_0x28aaec;}else return _0x28aaec;},_0x4cb2f2['ev']['on'](_0x4dad41(0x1d9),_0x34c77e=>{const _0x29d19f=_0x4dad41;for(let _0x454db0 of _0x34c77e){let _0x5b0531=_0x4cb2f2['decodeJid'](_0x454db0['id']);if(store&&store[_0x29d19f(0x20a)])store[_0x29d19f(0x20a)][_0x5b0531]={'id':_0x5b0531,'name':_0x454db0[_0x29d19f(0x1bd)]};}}),_0x4cb2f2[_0x4dad41(0x1d4)]=(_0x3ea966,_0x116b33=![])=>{const _0x47947b=_0x4dad41;id=_0x4cb2f2[_0x47947b(0x224)](_0x3ea966),_0x116b33=_0x4cb2f2[_0x47947b(0x1c3)]||_0x116b33;let _0x29b317;if(id[_0x47947b(0x1ca)](_0x47947b(0x1ae)))return new Promise(async _0x4847bc=>{const _0x2544c5=_0x47947b;_0x29b317=store[_0x2544c5(0x20a)][id]||{};if(!(_0x29b317[_0x2544c5(0x21d)]||_0x29b317[_0x2544c5(0x1b9)]))_0x29b317=_0x4cb2f2[_0x2544c5(0x1f5)](id)||{};_0x4847bc(_0x29b317[_0x2544c5(0x21d)]||_0x29b317[_0x2544c5(0x1b9)]||PhoneNumber('+'+id[_0x2544c5(0x20e)](_0x2544c5(0x21f),''))[_0x2544c5(0x1b4)](_0x2544c5(0x1f6)));});else _0x29b317=id===_0x47947b(0x1b8)?{'id':id,'name':_0x47947b(0x1ce)}:id===_0x4cb2f2['decodeJid'](_0x4cb2f2['user']['id'])?_0x4cb2f2[_0x47947b(0x1ed)]:store['contacts'][id]||{};return(_0x116b33?'':_0x29b317[_0x47947b(0x21d)])||_0x29b317[_0x47947b(0x1b9)]||_0x29b317['verifiedName']||PhoneNumber('+'+_0x3ea966[_0x47947b(0x20e)](_0x47947b(0x21f),''))[_0x47947b(0x1b4)]('international');},_0x4cb2f2[_0x4dad41(0x1c5)]=!![],_0x4cb2f2[_0x4dad41(0x212)]=_0x1bdf33=>smsg(_0x4cb2f2,_0x1bdf33,store),_0x4cb2f2['ev']['on'](_0x4dad41(0x221),async _0x55017b=>{const _0x237462=_0x4dad41,{connection:_0x3ae542,lastDisconnect:_0x10ddde}=_0x55017b;try{if(_0x3ae542===_0x237462(0x1e6)){let _0x41b0d9=new Boom(_0x10ddde?.['error'])?.['output'][_0x237462(0x215)];if(_0x41b0d9===DisconnectReason[_0x237462(0x1c0)])console[_0x237462(0x208)](_0x237462(0x1d8)),startMyoku();else{if(_0x41b0d9===DisconnectReason[_0x237462(0x1af)])console[_0x237462(0x208)](_0x237462(0x1cc)),startMyoku();else{if(_0x41b0d9===DisconnectReason['connectionLost'])console[_0x237462(0x208)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startMyoku();else{if(_0x41b0d9===DisconnectReason[_0x237462(0x1c8)])console[_0x237462(0x208)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),startMyoku();else{if(_0x41b0d9===DisconnectReason['loggedOut'])console[_0x237462(0x208)](_0x237462(0x1b7)),startMyoku();else{if(_0x41b0d9===DisconnectReason[_0x237462(0x210)])console[_0x237462(0x208)](_0x237462(0x1ea)),startMyoku();else{if(_0x41b0d9===DisconnectReason[_0x237462(0x1f3)])console[_0x237462(0x208)](_0x237462(0x1f9)),startMyoku();else _0x4cb2f2[_0x237462(0x20d)](_0x237462(0x1e7)+_0x41b0d9+'|'+_0x3ae542);}}}}}}}(_0x55017b[_0x237462(0x1ec)]==_0x237462(0x1d3)||_0x55017b['receivedPendingNotifications']=='false')&&console[_0x237462(0x208)](_0x237462(0x1bf)),(_0x55017b[_0x237462(0x1ec)]==_0x237462(0x1e0)||_0x55017b['receivedPendingNotifications']=='true')&&(console[_0x237462(0x208)](_0x237462(0x1cf)),console[_0x237462(0x208)]('[Connected]\x20'+JSON[_0x237462(0x21c)](_0x4cb2f2[_0x237462(0x1ed)],null,0x2)));}catch(_0x1437c1){console['log'](_0x237462(0x1fc)+_0x1437c1),startMyoku();}}),_0x4cb2f2['ev']['on'](_0x4dad41(0x1d7),_0x368ebe),_0x4cb2f2['sendText']=(_0x34b566,_0x3ca8b3,_0x565877='',_0x2aa4c5)=>_0x4cb2f2[_0x4dad41(0x20c)](_0x34b566,{'text':_0x3ca8b3,..._0x2aa4c5},{'quoted':_0x565877,..._0x2aa4c5}),_0x4cb2f2[_0x4dad41(0x1c4)]=async(_0x121e26,_0x5dfb4b,_0x75e973,_0x19f9f0={})=>_0x4cb2f2[_0x4dad41(0x20c)](_0x121e26,{'text':_0x5dfb4b,'mentions':[..._0x5dfb4b[_0x4dad41(0x1e2)](/@(\d{0,16})/g)][_0x4dad41(0x200)](_0x499d05=>_0x499d05[0x1]+'@s.whatsapp.net'),..._0x19f9f0},{'quoted':_0x75e973}),_0x4cb2f2[_0x4dad41(0x217)]=async(_0x4a4b8c,_0xe37a54,_0x1a7ebf,_0x234e25={})=>{const _0x41aaa9=_0x4dad41;let _0x3cdb37=Buffer[_0x41aaa9(0x213)](_0xe37a54)?_0xe37a54:/^data:.*?\/.*?;base64,/i['test'](_0xe37a54)?Buffer[_0x41aaa9(0x21e)](_0xe37a54[_0x41aaa9(0x222)]`,`[0x1],_0x41aaa9(0x204)):/^https?:\/\//[_0x41aaa9(0x1f8)](_0xe37a54)?await await getBuffer(_0xe37a54):fs['existsSync'](_0xe37a54)?fs[_0x41aaa9(0x1ba)](_0xe37a54):Buffer['alloc'](0x0),_0x33e95b;return _0x234e25&&(_0x234e25[_0x41aaa9(0x219)]||_0x234e25['author'])?_0x33e95b=await writeExifImg(_0x3cdb37,_0x234e25):_0x33e95b=await imageToWebp(_0x3cdb37),await _0x4cb2f2[_0x41aaa9(0x20c)](_0x4a4b8c,{'sticker':{'url':_0x33e95b},..._0x234e25},{'quoted':_0x1a7ebf}),_0x33e95b;},_0x4cb2f2[_0x4dad41(0x1cb)]=async(_0x52a641,_0x11eec6,_0x16ceaf,_0x434c8e={})=>{const _0x391a0b=_0x4dad41;let _0x5b74f7=Buffer[_0x391a0b(0x213)](_0x11eec6)?_0x11eec6:/^data:.*?\/.*?;base64,/i[_0x391a0b(0x1f8)](_0x11eec6)?Buffer['from'](_0x11eec6[_0x391a0b(0x222)]`,`[0x1],_0x391a0b(0x204)):/^https?:\/\//[_0x391a0b(0x1f8)](_0x11eec6)?await await getBuffer(_0x11eec6):fs[_0x391a0b(0x205)](_0x11eec6)?fs[_0x391a0b(0x1ba)](_0x11eec6):Buffer[_0x391a0b(0x1c7)](0x0),_0x202b92;return _0x434c8e&&(_0x434c8e[_0x391a0b(0x219)]||_0x434c8e[_0x391a0b(0x1ef)])?_0x202b92=await writeExifVid(_0x5b74f7,_0x434c8e):_0x202b92=await videoToWebp(_0x5b74f7),await _0x4cb2f2[_0x391a0b(0x20c)](_0x52a641,{'sticker':{'url':_0x202b92},..._0x434c8e},{'quoted':_0x16ceaf}),_0x202b92;},_0x4cb2f2[_0x4dad41(0x220)]=async(_0x30771f,_0x571ad9,_0x4b5e7d=!![])=>{const _0x5ddeb9=_0x4dad41;let _0x55ee10=_0x30771f[_0x5ddeb9(0x1df)]?_0x30771f[_0x5ddeb9(0x1df)]:_0x30771f,_0x313c5e=(_0x30771f['msg']||_0x30771f)[_0x5ddeb9(0x1fe)]||'',_0x15951f=_0x30771f['mtype']?_0x30771f[_0x5ddeb9(0x207)][_0x5ddeb9(0x20e)](/Message/gi,''):_0x313c5e['split']('/')[0x0];const _0x1709b6=await downloadContentFromMessage(_0x55ee10,_0x15951f);let _0x11f4af=Buffer[_0x5ddeb9(0x21e)]([]);for await(const _0x5ea94e of _0x1709b6){_0x11f4af=Buffer[_0x5ddeb9(0x1be)]([_0x11f4af,_0x5ea94e]);}let _0x3cee88=await FileType[_0x5ddeb9(0x1b0)](_0x11f4af);return trueFileName=_0x4b5e7d?_0x571ad9+'.'+_0x3cee88[_0x5ddeb9(0x20f)]:_0x571ad9,await fs[_0x5ddeb9(0x1d5)](trueFileName,_0x11f4af),trueFileName;},_0x4cb2f2[_0x4dad41(0x216)]=async _0x43d0d8=>{const _0x4fbec9=_0x4dad41;let _0x3cebb8=(_0x43d0d8[_0x4fbec9(0x1df)]||_0x43d0d8)[_0x4fbec9(0x1fe)]||'',_0xd62bc5=_0x43d0d8['mtype']?_0x43d0d8[_0x4fbec9(0x207)][_0x4fbec9(0x20e)](/Message/gi,''):_0x3cebb8[_0x4fbec9(0x222)]('/')[0x0];const _0x4c2974=await downloadContentFromMessage(_0x43d0d8,_0xd62bc5);let _0x2b12fe=Buffer['from']([]);for await(const _0x3f10cd of _0x4c2974){_0x2b12fe=Buffer[_0x4fbec9(0x1be)]([_0x2b12fe,_0x3f10cd]);}return _0x2b12fe;},_0x4cb2f2;}startMyoku();let file=require['resolve'](__filename);function _0x4e0e(){const _0x73d6e4=['connection.update','split','messages.upsert','decodeJid','@g.us','connectionClosed','fromBuffer','remoteJid','Chrome\x20(Linux)','./lib/myfunc','getNumber','awesome-phonenumber','registered','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','0@s.whatsapp.net','subject','readFileSync','startsWith','question','notify','concat','[Sedang\x20mengkoneksikan]','badSession','Update\x20','1106256OgevAs','withoutContact','sendTextWithMentions','public','ephemeralMessage','alloc','connectionReplaced','server','endsWith','sendVideoAsSticker','Connection\x20closed,\x20reconnecting....','watchFile','WhatsApp','[Connecting\x20to]\x20WhatsApp\x20web','./lib/exif','status@broadcast','128wplxBd','connecting','getName','writeFileSync','stdout','creds.update','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','contacts.update','156879oMptmK','stdin','FatihArridho_','@whiskeysockets/baileys','\x0a\x0a\x0aSilahkan\x20masukin\x20nomor\x20Whatsapp\x20Awali\x20dengan\x2062:\x0a','msg','open','chalk','matchAll','length','./settings','createInterface','close','Unknown\x20DisconnectReason:\x20','authState','289648XBxnwN','Restart\x20Required,\x20Restarting...','fromMe','connection','user','type','author','store','message','redBright','timedOut','./session','groupMetadata','international','unwatchFile','test','Connection\x20TimedOut,\x20Reconnecting...','file-type','⚠︎\x20Kode\x20Pairing\x20Bot\x20Whatsapp\x20kamu\x20:\x20','Error\x20Di\x20Connection.update\x20','messages','mimetype','creds','map','BAE5','axios','key','base64','existsSync','3610600luqlDd','mtype','log','@hapi/boom','contacts','131830sPRTGx','sendMessage','end','replace','ext','restartRequired','24146pOBbsa','serializeM','isBuffer','pino','statusCode','downloadMediaMessage','sendImageAsSticker','silent','packname','53WjpHYI','3251076RNGzON','stringify','name','from','@s.whatsapp.net','downloadAndSaveMediaMessage'];_0x4e0e=function(){return _0x73d6e4;};return _0x4e0e();}fs[_0x396f51(0x1cd)](file,()=>{const _0x2e06b2=_0x396f51;fs[_0x2e06b2(0x1f7)](file),console[_0x2e06b2(0x208)](chalk[_0x2e06b2(0x1f2)](_0x2e06b2(0x1c1)+__filename)),delete require['cache'][file],require(file);});
