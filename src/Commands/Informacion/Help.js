const { HelpCommand } = require("../../Complementos/HelpCommand");

module.exports = {
    name: "ayuda",
    aliases: ["ayu"],
    category: "informacion",
    description: "Retorna todos los comandos disponibles",
    usage: "!afrt ayuda",
    run: async(client, message, args) => {
        if (args[0]) await HelpCommand.getCmd(client, message, args[0]);
        await HelpCommand.getAll(client, message);
    }
}