const path = require('path');
const fs = require('fs');

class ConfigurationServerUtils {
    static editSessionDuration(time, pathFolder) {
        const timeToSave = parseInt(time, 10) - 2;
        const fileToWrite = path.join(`${pathFolder}/cfg/event.json`);
        const eventJson = fs.readFileSync(fileToWrite);
        let result = JSON.parse(eventJson);
        result.sessions[0].sessionDurationMinutes = timeToSave;
        fs.writeFileSync(fileToWrite, JSON.stringify(result, null, 2));
        return true;
    }
}

module.exports = { ConfigurationServerUtils };