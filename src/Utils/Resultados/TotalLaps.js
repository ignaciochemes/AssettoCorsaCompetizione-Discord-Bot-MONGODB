const { LapsDao } = require("../../Dao/LapsDao");

class TotalLaps {
    constructor(){}

    static async setTotalLaps() {
        const data = await LapsDao.getFolders();
        if(data.length == 0) return;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].resto.length; j++) {
                console.log(data[i].resto[j].timing.lapCount);
            }
        }
    }
}

module.exports = { TotalLaps };