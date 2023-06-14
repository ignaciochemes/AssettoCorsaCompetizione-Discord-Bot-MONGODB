module.exports = {
    name: "borrarmensajes",
    aliases: ["br"],
    category: "information",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt borrar",
    run: async(client, message, args) => {
        const messageArray = message.content.split(' ');

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('No tienes permiso para ejecutar este comando!');

        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Por favor introduce un numero del 1 al 99')}

        if (parseInt(args[0]) > 100) {
            return message.reply('Solo puedes borrar 99 mensajes como maximo!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Satisfactorio** Borrado ***${deleteAmount}*** mensajes.`)
    }
}