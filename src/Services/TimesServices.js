const { TiemposDao } = require("../Dao/TiemposDao");
const { TracksConstants } = require("../Constants/TrackConstants");

class TimesServices {
    static async getTimes(track, clas) {
        const findTrack = TracksConstants.tracks.find(obj => obj === track);
        if (findTrack == undefined || findTrack == null) return false;
        const times = await TiemposDao.getTiempos(track, clas);
        return times;
    }
}

module.exports = { TimesServices };