class MsToSegundos {
    constructor(){}

    static async msToSegundos(milliseconds) {
        let minutes = milliseconds / (1000 * 60);
        let absoluteMinutes = Math.floor(minutes);
        let min = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;
        let seconds = (minutes - absoluteMinutes) * 60;
        let absoluteSeconds = Math.floor(seconds);
        let sec = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
        let mili = Math.floor((seconds - absoluteSeconds) * 1000);
        mili = mili > 9 ? mili : '0' + mili;
        mili = mili > 99 ? mili : '0' + mili;

        return min + ':' + sec + '.' + mili;
    }
}

module.exports = { MsToSegundos };