const { ApagarServer } = require("../../complementos/apagarServer");
const { GeneralConstants } = require("../../constants/genera.constants");
const { TextConstants } = require("../../constants/text.constants");

module.exports = {
    name: "apagar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
    usage: "!afrt levantar",
    run: async(client, message, args) => {
        if (!args[0]) return message.reply(TextConstants.APAGAR_NO_ARGS)
            .then(m => m.delete({timeout: GeneralConstants.TREINTA_TIMEOUT}));
        await ApagarServer.apagarServer(message, args)
    }
}