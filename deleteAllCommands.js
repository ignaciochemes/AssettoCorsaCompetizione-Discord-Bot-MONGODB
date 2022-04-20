const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '9' }).setToken(token);

//get all slash commands
rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        console.log(data);
        // const promises = [];
        // for (const command of data) {
        //     const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
        //     promises.push(rest.delete(deleteUrl));
        // }
        // return Promise.all(promises);
    })
