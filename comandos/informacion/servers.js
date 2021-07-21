const { GetServers } = require('../../complementos/getServers');

module.exports = {
    name: "servers",
    aliases: ["sv"],
    category: "informacion",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt servers",
    run: async(client, message, args) => {
        let res = await GetServers.getServers();
        return message.reply(res);
    }
}