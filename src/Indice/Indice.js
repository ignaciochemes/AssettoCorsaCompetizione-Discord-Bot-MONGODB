const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const tabla = new ascii().setHeading("Comando", "Status");

module.exports = (client) => {
    const comandos = readdirSync(`./src/Commands/`).filter(f => f.endsWith(".js"));

    for (const file of comandos) {
        const command = require(`../Commands/${file}`);

        if (command.name) {
            client.commands.set(command.name, command);
            tabla.addRow(file, 'ON');
        } else {
            tabla.addRow(file, 'OFF -> olvidaste algo?');
            continue;
        }
        if (command.aliases && Array.isArray(command))
            command.aliases.forEach(alias => client.aliases.set(alias, command.name));
    }
    console.log(tabla.toString());
    console.log("Los comandos estan listos");

    const events = readdirSync(`./src/Events/`).filter(f => f.endsWith(".js"));
    events.map((obj) => require(`../Events/${obj}`));
}