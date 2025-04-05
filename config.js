const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Add Your Api Key ( Contact https://wa.me//+917849917350?text=Api_Key to buy api Key (Low Price...❤️) )
    API_KEY: 'free',
    // Put your bot's owner number.
    OWNER: '917849917350',
    // Set Bot's thumbnail image.
    THUMBNAIL: 'https://files.catbox.moe/1r5lzc.jpg', 
    // Set Bot's SinhalaSub image.
    SINHALA_SUB: 'https://files.catbox.moe/j22o6h.jpg',
    // Set Bot's Cinesubz image.
    CINESUBZ: 'https://files.catbox.moe/n2ts8b.jpg',
    // Set Bot's Baiscope image.
    BAISCOPE: 'https://i.ibb.co/39qs4RK4/1679311670111.jpg',
    // Set Bot's SexMv image.
    SX_MV: 'https://i.ibb.co/4RgkDKqn/parental-advisory-explicit-content-18-years-grunge-round-red-warning-stamp-isolated-on-white-vector.jpg',
    // Add Your Movie Group Jid
    JID: '120363042880465739@g.us',
    // Set Bot's Name...❤️)
    BOT_NAME: 'TOHID-MOVIE',
    // Define the bot's footer or signature...❤️)
    FOOTER: '© 𝐓𝐨𝐡𝐢𝐝-𝐌𝐨𝐯𝐢𝐞𝐬'
};
