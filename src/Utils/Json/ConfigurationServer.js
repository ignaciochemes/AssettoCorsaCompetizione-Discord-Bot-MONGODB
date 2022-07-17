const path = require('path');
const fs = require('fs');

class ConfigurationServer {

    static editSessionDuration(tiempo, ruta) {
        const timeToSave = parseInt(tiempo, 10) - 2;
        const fileToWrite = path.join(`${ruta}/cfg/event.json`);
        const eventJson = fs.readFileSync(fileToWrite);
        let result = JSON.parse(eventJson);
        result.sessions[0].sessionDurationMinutes = timeToSave;
        fs.writeFileSync(fileToWrite, JSON.stringify(result, null, 2));
        return true;
    }

}

module.exports = { ConfigurationServer };