const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const tabla = new ascii().setHeading("Comando", "Status");

module.exports = (client) => {
    readdirSync("./comandos/").forEach(dir => {
        const comandos = readdirSync(`./comandos/${dir}/`).filter(f => f.endsWith(".js"));

        for (let file of comandos) {
            let pull = require(`../comandos/${dir}/${file}`);

            if (pull.name) {
                client.commands.set(pull.name, pull);
                tabla.addRow(file, 'ON');
            } else {
                tabla.addRow(file, 'OFF -> olvidaste algo?');
                continue;
            }
            if (pull.aliases && Array.isArray(pull))
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(tabla.toString());
    console.log("Los comandos estan listos");
}