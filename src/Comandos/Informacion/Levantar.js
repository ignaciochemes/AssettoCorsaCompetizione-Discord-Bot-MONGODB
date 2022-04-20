const { PrenderServer } = require("../../Complementos/PrenderServer");

module.exports = {
    name: "levantar",
    aliases: ["br"],
    category: "information",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt borrar",
    run: async (client, message, args) => {
        await PrenderServer.prenderServer(process, message, args);
    }
}