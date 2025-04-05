//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : TOHID-MOVIE
//  * @author : Mr Tohid 
//  * @youtube : https://www.youtube.com/@Tohidkhan_6332
//  * @description : TOHID-MOVIE ,A Multi-functional whatsapp user bot.
//*
//*
//base by Tohid Khan 
//GitHub: @Tohidkhan6332
//WhatsApp: 917849917350
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Tohidkhan_6332
//   * Created By Github: Tohidkhan6332.
//   * Credit To Manul Official
//   * © 2024 TOHID-MOVIES-V7.
// ⛥┌┤
// */


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'Movie-MD&oGMGQCRZ#xhW3lwgh9BcK_t3Qcdea2J-N-28kt5EFICMVNTAEXhU' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
BUTTON: process.env.PORT === undefined ? "true" : process.env.PORT,
SUDO: process.env.SUDO === undefined ? '917849917350' : process.env.SUDO,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? "false" : process.env.ALWAYS_ONLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AUTO_TYPING: process.env.AUTO_TYPING === undefined ? 'false' : process.env.AUTO_TYPING,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://manul:qbWhglRV24IXQqDJbKIbtWADaSRj0e19@dpg-cuokgraj1k6c739an3s0-a/manu_md_db' : process.env.POSTGRESQL_URL,
};
