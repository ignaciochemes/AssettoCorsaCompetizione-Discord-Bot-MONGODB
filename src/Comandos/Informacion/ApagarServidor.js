const { ApagarServer } = require('../../Complementos/ApagarServer');
const { TextConstants } = require('../../Constants/TextConstants');

module.exports = {
    name: "apagar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
    usage: "!afrt levantar",
    run: async(client, message, args) => {
        if(!args[0] || !args) return message.reply(TextConstants.SERVER_INFO_NO_ARGS);
        await ApagarServer.apagarServer(message, args[0]);
    }
}