const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');

require('./database/db-connection');

const client = new Client();
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./comandos/");

//Indice
["indice"].forEach(indice => {
    require(`./indice/${indice}`)(client);
});

//Config Path .env
config({
    path: __dirname + "/.env"
});

client.on('ready', () => {
    console.log(`Logeado como ${client.user.tag}`);
    client.user.setActivity(`!afrt ayuda`, {type: "COMPETING"});
});

//Message configuration - Listener
client.on("message", async message => {
    const prefix = process.env.PREFIX;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.member(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.lenght === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

client.login(process.env.TOKEN);