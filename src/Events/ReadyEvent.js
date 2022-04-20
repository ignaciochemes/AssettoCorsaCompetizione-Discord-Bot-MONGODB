const client = require('../../afrt.js');

client.on('ready', () => {
    console.log(`Logeado como ${client.user.tag}`);
    client.user.setActivity(`!afrt ayuda`, { type: "COMPETING" });
});