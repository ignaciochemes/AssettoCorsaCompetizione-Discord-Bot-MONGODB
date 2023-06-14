const { PathBashConstants } = require("../Constants/PathBashConstants");

class PathServices {
    static checkStartPath(path) {
        const PATH_BASH_START = {
            '0': PathBashConstants.START_PATH_SERVER_0,
            '1': PathBashConstants.START_PATH_SERVER_1,
            '2': PathBashConstants.START_PATH_SERVER_2,
            '3': PathBashConstants.START_PATH_SERVER_3,
            '4': PathBashConstants.START_PATH_SERVER_4,
            '5': PathBashConstants.START_PATH_SERVER_5,
            '6': PathBashConstants.START_PATH_SERVER_6,
            '7': PathBashConstants.START_PATH_SERVER_7,
            '8': PathBashConstants.START_PATH_SERVER_8,
            '9': PathBashConstants.START_PATH_SERVER_9,
            '10': PathBashConstants.START_PATH_SERVER_10,
            '11': PathBashConstants.START_PATH_SERVER_11,
            '12': PathBashConstants.START_PATH_SERVER_12,
            '13': PathBashConstants.START_PATH_SERVER_13,
            '14': PathBashConstants.START_PATH_SERVER_14,
            '15': PathBashConstants.START_PATH_SERVER_15,
            '16': PathBashConstants.START_PATH_SERVER_16,
            '17': PathBashConstants.START_PATH_SERVER_17,
            '18': PathBashConstants.START_PATH_SERVER_18,
            '19': PathBashConstants.START_PATH_SERVER_19,
            '20': PathBashConstants.START_PATH_SERVER_20,
            '21': PathBashConstants.START_PATH_SERVER_21,
        }
        return PATH_BASH_START[path]
    }

    static checkStopPath(path) {
        const PATH_BASH_STOP = {
            '0': PathBashConstants.STOP_PATH_SERVER_0,
            '1': PathBashConstants.STOP_PATH_SERVER_1,
            '2': PathBashConstants.STOP_PATH_SERVER_2,
            '3': PathBashConstants.STOP_PATH_SERVER_3,
            '4': PathBashConstants.STOP_PATH_SERVER_4,
            '5': PathBashConstants.STOP_PATH_SERVER_5,
            '6': PathBashConstants.STOP_PATH_SERVER_6,
            '7': PathBashConstants.STOP_PATH_SERVER_7,
            '8': PathBashConstants.STOP_PATH_SERVER_8,
            '9': PathBashConstants.STOP_PATH_SERVER_9,
            '10': PathBashConstants.STOP_PATH_SERVER_10,
            '11': PathBashConstants.STOP_PATH_SERVER_11,
            '12': PathBashConstants.STOP_PATH_SERVER_12,
            '13': PathBashConstants.STOP_PATH_SERVER_13,
            '14': PathBashConstants.STOP_PATH_SERVER_14,
            '15': PathBashConstants.STOP_PATH_SERVER_15,
            '16': PathBashConstants.STOP_PATH_SERVER_16,
            '17': PathBashConstants.STOP_PATH_SERVER_17,
            '18': PathBashConstants.STOP_PATH_SERVER_18,
            '19': PathBashConstants.STOP_PATH_SERVER_19,
            '20': PathBashConstants.STOP_PATH_SERVER_20,
            '21': PathBashConstants.STOP_PATH_SERVER_21,
        }
        return PATH_BASH_STOP[path]
    }
}

module.exports = { PathServices };