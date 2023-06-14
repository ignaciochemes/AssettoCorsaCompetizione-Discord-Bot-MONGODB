const { RutasBash } = require("../Constants/RutasBashConstants");

class ChequeoRuta {
    
    static chequeoRutaStart(ruta) {
        const RUTAS_BASH_START = {
            '0': RutasBash.START_RUTA_SERVER_0,
            '1': RutasBash.START_RUTA_SERVER_1,
            '2': RutasBash.START_RUTA_SERVER_2,
            '3': RutasBash.START_RUTA_SERVER_3,
            '4': RutasBash.START_RUTA_SERVER_4,
            '5': RutasBash.START_RUTA_SERVER_5,
            '6': RutasBash.START_RUTA_SERVER_6,
            '7': RutasBash.START_RUTA_SERVER_7,
            '8': RutasBash.START_RUTA_SERVER_8,
            '9': RutasBash.START_RUTA_SERVER_9,
            '10': RutasBash.START_RUTA_SERVER_10,
            '11': RutasBash.START_RUTA_SERVER_11,
            '12': RutasBash.START_RUTA_SERVER_12,
            '13': RutasBash.START_RUTA_SERVER_13,
            '14': RutasBash.START_RUTA_SERVER_14,
            '15': RutasBash.START_RUTA_SERVER_15,
            '16': RutasBash.START_RUTA_SERVER_16,
            '17': RutasBash.START_RUTA_SERVER_17,
            '18': RutasBash.START_RUTA_SERVER_18,
            '19': RutasBash.START_RUTA_SERVER_19,
            '20': RutasBash.START_RUTA_SERVER_20,
            '21': RutasBash.START_RUTA_SERVER_21,
            '22': RutasBash.START_RUTA_SERVER_22,
        }
        return RUTAS_BASH_START[ruta]
    }

    static chequeoRutaStop(ruta) {
        const RUTAS_BASH_STOP = {
            '0': RutasBash.STOP_RUTA_SERVER_0,
            '1': RutasBash.STOP_RUTA_SERVER_1,
            '2': RutasBash.STOP_RUTA_SERVER_2,
            '3': RutasBash.STOP_RUTA_SERVER_3,
            '4': RutasBash.STOP_RUTA_SERVER_4,
            '5': RutasBash.STOP_RUTA_SERVER_5,
            '6': RutasBash.STOP_RUTA_SERVER_6,
            '7': RutasBash.STOP_RUTA_SERVER_7,
            '8': RutasBash.STOP_RUTA_SERVER_8,
            '9': RutasBash.STOP_RUTA_SERVER_9,
            '10': RutasBash.STOP_RUTA_SERVER_10,
            '11': RutasBash.STOP_RUTA_SERVER_11,
            '12': RutasBash.STOP_RUTA_SERVER_12,
            '13': RutasBash.STOP_RUTA_SERVER_13,
            '14': RutasBash.STOP_RUTA_SERVER_14,
            '15': RutasBash.STOP_RUTA_SERVER_15,
            '16': RutasBash.STOP_RUTA_SERVER_16,
            '17': RutasBash.STOP_RUTA_SERVER_17,
            '18': RutasBash.STOP_RUTA_SERVER_18,
            '19': RutasBash.STOP_RUTA_SERVER_19,
            '20': RutasBash.STOP_RUTA_SERVER_20,
            '21': RutasBash.STOP_RUTA_SERVER_21,
            '22': RutasBash.STOP_RUTA_SERVER_22,
        }
        return RUTAS_BASH_STOP[ruta]
    }
}

module.exports = { ChequeoRuta }