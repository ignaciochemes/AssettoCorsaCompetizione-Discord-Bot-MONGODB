const fs = require('fs');

class LeerJson {
    constructor(){}

    static async readJson(ruta) {
        let configurationJson = fs.readFileSync(ruta + '/cfg/configuration.json');
        let eventJson = fs.readFileSync(ruta + '/cfg/event.json');
        let settingsJson = fs.readFileSync(ruta + '/cfg/settings.json');
        let dataConfigurationJson = await JSON.parse(configurationJson);
        let dataEventJson = await JSON.parse(eventJson);
        let dataSettingsJson = await JSON.parse(settingsJson);
        return { 'config': dataConfigurationJson, 'event': dataEventJson, 'settings': dataSettingsJson }
    }

    static async readConfigJson(ruta) {
        let configurationJson = fs.readFileSync(ruta + '/cfg/configuration.json');
        let dataConfigurationJson = await JSON.parse(configurationJson);
        return dataConfigurationJson;
    }
}

module.exports = { LeerJson };