const fs = require('node:fs');
const path = require('node:path');
const cron = require('node-cron');
const { Client, REST, Routes, GatewayIntentBits, Collection } = require('discord.js');
const { LeerJsonDb } = require('./src/Utils/Json/LeerJsonDb');
const { DatabaseConnection } = require('./src/Database/DbConnection');
const { LeerAllFolders } = require('./src/Utils/Json/LeerAllFolders');
const { MejoresVueltas } = require('./src/Utils/Results/MejoresVueltas');
const { GuardarAllFolders } = require('./src/Utils/Json/GuardarAllFolders');
const { TotalLaps } = require('./src/Utils/Results/TotalLaps');
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
const commandsPath = path.join(__dirname, './src/Commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
	commands.push(command.data.toJSON());
}

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
console.log(process.env.TOKEN)
client.login(process.env.TOKEN);