const { PrenderServer } = require("../../complementos/prenderServer");

module.exports = {
    name: "levantar",
    aliases: ["br"],
    category: "information",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt borrar",
    run: async(client, message, args) => {
        await PrenderServer.prenderServer(message, args);
    }
}