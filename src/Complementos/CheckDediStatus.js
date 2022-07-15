const os = require('node-os-utils');

class DediStatus {
    static _cpu = os.cpu;
    static _ram = os.mem;
    static _net = os.netstat;

    static async cpuUsage() {
        const data = this._cpu.usage();
        return data;
    };

    static async ramUsage() {
        const data = this._ram.used();
        return data;
    };

    static async netUsage() {
        const data = this._net.inOut().then(info => info)
        return data;
    };
}

module.exports = { DediStatus }