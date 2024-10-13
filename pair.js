const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Khosa-Md,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function KHOSA-MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Khosa-Md = Khosa-Md({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Khosa-Md.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Khosa-Md.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Khosa-Md.ev.on('creds.update', saveCreds)
            Pair_Code_By_Khosa-Md.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Khosa-Md.sendMessage(Pair_Code_By_Khosa-Md.user.id, { text: '' + b64data });

               let KHOSA_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃KHOSA_MD_V2 SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘 BARKAT ALI 𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vaknh8z9hXFF78u1iV1K
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*Subscribe My YouTube Channel*
*https://youtube.com/@khosa-bh*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*2024-2099 Barkat Ali*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_KHOSA_MD_V2.sendMessage(Pair_Code_By_Khosa-md-v2.user.id,{text:KHOSA_MD_V2_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Khosa_Md_V2.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    KHOSA_MD_V2_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await KHOSA_MD_V2_PAIR_CODE()
});
module.exports = router
