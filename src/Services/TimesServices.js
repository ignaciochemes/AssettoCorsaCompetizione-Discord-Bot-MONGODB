const { TimesDao } = require("../Dao/TimesDao");
const { TracksConstants } = require("../Constants/TrackConstants");

class TimesServices {
    static async getTimes(track, clas) {
        const findTrack = TracksConstants.tracks.find(obj => obj === track);
        if (findTrack == undefined || findTrack == null) return false;
        const times = await TimesDao.getTimes(track, clas);
        return times;
    }
}

module.exports = { TimesServices };