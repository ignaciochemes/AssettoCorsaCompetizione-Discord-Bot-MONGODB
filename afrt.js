const fs = require('node:fs');
const path = require('node:path');
const cron = require('node-cron');
const { Client, REST, Routes, GatewayIntentBits, Collection } = require('discord.js');
const { LeerJsonDb } = require('./src/Utils/Json/LeerJsonDb');
const { DatabaseConnection } = require('./src/Database/DbConnection');
const { LeerAllFolders } = require('./src/Utils/Json/LeerAllFolders');
const { MejoresVueltas } = require('./src/Utils/Resultados/MejoresVueltas');
const { GuardarAllFolders } = require('./src/Utils/Json/GuardarAllFolders');
const { TotalLaps } = require('./src/Utils/Resultados/TotalLaps');
const { getEnvironment } = require('./src/Configs/Environment');

getEnvironment()
DatabaseConnection.getInstancia();

async function main() {
    let carpetas = await LeerAllFolders.leerJson();
    await GuardarAllFolders.guardarAllFolders(carpetas);
    await LeerJsonDb.leerJson(carpetas);
    let vueltas = await MejoresVueltas.getMejoresVueltas(carpetas);
    await MejoresVueltas.getDataMejorVuelta(vueltas);
    //await TotalLaps.setTotalLaps(vueltas);
}

//main();
cron.schedule('*/45 * * * *', () => {
    main();
});

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, './src/Comandos');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

// client.aliases = new Collection();
// client.categories = fs.readdirSync("./src/Comandos/");

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: commands },
		);
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

// rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);

//Indice
// ["Indice"].forEach(indice => {
//     require(`./src/Indice/${indice}`)(client);
// });

client.on('ready', () => {
    console.log(`Logeado como ${client.user.tag}`);
    client.user.setActivity(`!afrt ayuda`, { type: "COMPETING" });
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//Message configuration - Listener
// client.on("interactionCreate", async message => {
//     console.log(message.content);
//     const prefix = process.env.PREFIX;
//     if (message.author.bot) return;
//     if (!message.guild) return;
//     if (!message.content.startsWith(prefix)) return;
//     if (!message.member) message.member = await message.guild.member(message);

//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
//     const cmd = args.shift().toLowerCase();

//     if (cmd.lenght === 0) return;

//     let command = client.commands.get(cmd);
//     if (!command) command = client.commands.get(client.aliases.get(cmd));

//     if (command)
//         command.run(client, message, args);
// });

client.login(process.env.TOKEN);