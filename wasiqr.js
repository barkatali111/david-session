const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Khosa_Md_V2,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function KHOSA_MD_V2_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Khosa_Md_V2 = Khosa_Md_V2({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Khosa_Md_V2.ev.on('creds.update', saveCreds)
			Qr_Code_By_Khosa_Md_V2.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Khosa_Md_V2.sendMessage(Qr_Code_By_Khosa_Md_V2.user.id, { text: '' + b64data });
	
				   let KHOSA_MD_V2_TEXT = `
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
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Khosa_Md_V2.sendMessage(Qr_Code_By_Khosa_Md_V2.user.id,{text:KHOSA_MD_V2_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Khosa_Md_V2.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					KHOSA_MD_V2_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await KHOSA_MD_V2_QR_CODE()
});
module.exports = router
