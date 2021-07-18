const { PrenderServer } = require("../../complementos/prenderServer");
const { GeneralConstants } = require("../../constants/genera.constants");
const { TextConstants } = require("../../constants/text.constants");

module.exports = {
    name: "levantar",
    aliases: ["br"],
    category: "information",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt borrar",
    run: async(client, message, args) => {
        if (!args[0]) return message.reply(TextConstants.LEVANTAR_NO_ARGS)
            .then(m => m.delete({timeout: GeneralConstants.TREINTA_TIMEOUT}));
        await PrenderServer.prenderServer(process, message, args);
    }
}