const fs = require('node:fs');
const path = require('node:path');
const cron = require('node-cron');
const { Client, REST, Routes, GatewayIntentBits, Collection } = require('discord.js');
const { ReadJsonDbUtils } = require('./src/Utils/Json/ReadJsonDbUtil');
const { DatabaseConnection } = require('./src/Database/DbConnection');
const { ReadAllFolderUtils } = require('./src/Utils/Json/ReadAllFoldersUtil');
const { BestLapsUtils } = require('./src/Utils/Results/BestLapsUtil');
const { SaveAllFolderUtils } = require('./src/Utils/Json/SaveAllFolderUtil');
const { TotalLaps } = require('./src/Utils/Results/TotalLaps');
const { getEnvironment } = require('./src/Configs/Environment');

getEnvironment()
DatabaseConnection.getInstancia();

async function main() {
	let folders = await ReadAllFolderUtils.readJson();
	await SaveAllFolderUtils.saveAllFolders(folders);
	await ReadAllFolderUtils.readJson(folders);
	let laps = await BestLapsUtils.getBestLaps(folders);
	await BestLapsUtils.getBestLapsData(laps);
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
	console.log(`Logged as ${client.user.tag}`);
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