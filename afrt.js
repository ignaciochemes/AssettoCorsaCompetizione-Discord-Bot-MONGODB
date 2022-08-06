const fs = require('fs');
const cron = require('node-cron');
const { Client, Collection, Inten, GatewayIntentBits } = require('discord.js');
const { LeerJsonDb } = require('./src/Utils/Json/LeerJsonDb');
const { DatabaseConnection } = require('./src/Database/DbConnection');
const { LeerAllFolders } = require('./src/Utils/Json/LeerAllFolders');
const { MejoresVueltas } = require('./src/Utils/Resultados/MejoresVueltas');
const { GuardarAllFolders } = require('./src/Utils/Json/GuardarAllFolders');
const { TotalLaps } = require('./src/Utils/Resultados/TotalLaps');
const { getEnvironment } = require('./src/Configs/Environment');

getEnvironment()
DatabaseConnection.getInstancia();

async function main() {
    let carpetas = await LeerAllFolders.leerJson();
    await GuardarAllFolders.guardarAllFolders(carpetas);
    await LeerJsonDb.leerJson(carpetas);
    let vueltas = await MejoresVueltas.getMejoresVueltas(carpetas);
    await MejoresVueltas.getDataMejorVuelta(vueltas);
    //await TotalLaps.setTotalLaps(vueltas);
}

//main();
cron.schedule('*/45 * * * *', () => {
    main();
});

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./src/Comandos/");

//Indice
["Indice"].forEach(indice => {
    require(`./src/Indice/${indice}`)(client);
});

client.on('ready', () => {
    console.log(`Logeado como ${client.user.tag}`);
    client.user.setActivity(`!afrt ayuda`, { type: "COMPETING" });
});

//Message configuration - Listener
client.on("interactionCreate", async message => {
    console.log(message.content);
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