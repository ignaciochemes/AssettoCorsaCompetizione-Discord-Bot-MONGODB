const fs = require('fs');
const cron = require('node-cron');
const { Client, Collection, Intents } = require('discord.js');
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
// cron.schedule('*/45 * * * *', () => {
//     main();
// });

const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILDS,
    ]
});

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./src/Comandos/");

["Indice"].forEach(indice => {
    require(`./src/Indice/${indice}`)(client);
});

client.login(process.env.TOKEN);