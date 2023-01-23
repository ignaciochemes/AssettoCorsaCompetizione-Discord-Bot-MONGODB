const ping = require('ping');

class PingServices {
    static async getPing() {
        const res = await ping.promise.probe('google.com', { timeout: 2 });
        return res.time;
    }
}

module.exports = { PingServices };