const { ApagarServer } = require('../../complementos/apagarServer');

module.exports = {
    name: "apagar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
    usage: "!afrt levantar",
    run: async(client, message, args) => {
        await ApagarServer.apagarServer(message, args[0]);
    }
}