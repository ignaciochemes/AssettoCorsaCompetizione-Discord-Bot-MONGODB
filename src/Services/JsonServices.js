const fs = require('fs');

class JsonServices {
    static async readJson(path) {
        const configurationJson = fs.readFileSync(path + '/cfg/configuration.json');
        const eventJson = fs.readFileSync(path + '/cfg/event.json');
        const settingsJson = fs.readFileSync(path + '/cfg/settings.json');
        const dataConfigurationJson = await JSON.parse(configurationJson);
        const dataEventJson = await JSON.parse(eventJson);
        const dataSettingsJson = await JSON.parse(settingsJson);
        return { 'config': dataConfigurationJson, 'event': dataEventJson, 'settings': dataSettingsJson }
    }

    static async readConfigJson(path) {
        const configurationJson = fs.readFileSync(path + '/cfg/configuration.json');
        const dataConfigurationJson = await JSON.parse(configurationJson);
        return dataConfigurationJson;
    }
}

module.exports = { JsonServices };