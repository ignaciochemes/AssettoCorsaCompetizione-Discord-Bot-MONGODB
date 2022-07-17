const path = require('path');
const fs = require('fs');

class ConfigurationServer {

    static editSessionDuration(tiempo, ruta) {
        console.log(tiempo, ruta);
        const fileToWrite = path.join(`${ruta}/cfg/event.json`);
        const eventJson = fs.readFileSync(fileToWrite);
        let result = JSON.parse(eventJson);
        result.sessions[0].sessionDurationMinutes = parseInt(tiempo, 10);
        fs.writeFileSync(fileToWrite, JSON.stringify(result, null, 2));
        return true;
    }

}

module.exports = { ConfigurationServer };