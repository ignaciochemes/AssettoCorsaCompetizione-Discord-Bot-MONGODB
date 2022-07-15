const fs = require('fs');

class LeerJson {

    static async readJson(ruta) {
        const configurationJson = fs.readFileSync(ruta + '/cfg/configuration.json');
        const eventJson = fs.readFileSync(ruta + '/cfg/event.json');
        const settingsJson = fs.readFileSync(ruta + '/cfg/settings.json');
        const dataConfigurationJson = await JSON.parse(configurationJson);
        const dataEventJson = await JSON.parse(eventJson);
        const dataSettingsJson = await JSON.parse(settingsJson);
        return { 'config': dataConfigurationJson, 'event': dataEventJson, 'settings': dataSettingsJson }
    }

    static async readConfigJson(ruta) {
        const configurationJson = fs.readFileSync(ruta + '/cfg/configuration.json');
        const dataConfigurationJson = await JSON.parse(configurationJson);
        return dataConfigurationJson;
    }
}

module.exports = { LeerJson };