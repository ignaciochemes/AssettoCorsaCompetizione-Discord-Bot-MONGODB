const { join } = require('path');

class GeneralConstants {

    static DEFAULT_TIMEOUT = 60000;
    static BASH_MSG_TIMEOUT = 15000;
    static DEFAULT_COLOR = '#ff2929';
    static DEFAULT_FOOTER = 'Develop by tato | AFRT';
    static DEFAULT_SERVER_FOLDER = join(__dirname, '../../ServidoresAFRT');

}

module.exports = { GeneralConstants };