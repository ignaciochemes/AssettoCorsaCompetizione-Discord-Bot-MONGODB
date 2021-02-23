const path = require('path');

const rutasStart = {
    START_RUTA_SERVER_0: 'H:\\ServidoresAFRT-BASH\\Server0\\startServer0.bat',
    START_RUTA_SERVER_1: 'H:\\ServidoresAFRT-BASH\\Server1\\startServer1.bat',
    START_RUTA_SERVER_2: 'H:\\ServidoresAFRT-BASH\\Server2\\startServer2.bat',
    START_RUTA_SERVER_3: 'H:\\ServidoresAFRT-BASH\\Server3\\startServer3.bat',
    START_RUTA_SERVER_4: 'H:\\ServidoresAFRT-BASH\\Server4\\startServer4.bat',
    START_RUTA_SERVER_5: 'H:\\ServidoresAFRT-BASH\\Server5\\startServer5.bat',
    START_RUTA_SERVER_6: 'H:\\ServidoresAFRT-BASH\\Server6\\startServer6.bat',
    START_RUTA_SERVER_7: 'H:\\ServidoresAFRT-BASH\\Server7\\startServer7.bat',
    START_RUTA_SERVER_8: 'H:\\ServidoresAFRT-BASH\\Server8\\startServer8.bat',
    START_RUTA_SERVER_9: 'H:\\ServidoresAFRT-BASH\\Server9\\startServer9.bat',
    START_RUTA_SERVER_10: 'H:\\ServidoresAFRT-BASH\\Server10\\startServer10.bat',
    START_RUTA_SERVER_11: 'H:\\ServidoresAFRT-BASH\\Server11\\startServer11.bat',
    START_RUTA_SERVER_12: 'H:\\ServidoresAFRT-BASH\\Server12\\startServer12.bat',
    START_RUTA_SERVER_13: 'H:\\ServidoresAFRT-BASH\\Server13\\startServer13.bat',
    START_RUTA_SERVER_14: 'H:\\ServidoresAFRT-BASH\\Server14\\startServer14.bat',
    START_RUTA_SERVER_15: 'H:\\ServidoresAFRT-BASH\\Server15\\startServer15.bat',
    START_RUTA_SERVER_16: 'H:\\ServidoresAFRT-BASH\\Server16\\startServer16.bat',
    START_RUTA_SERVER_17: 'H:\\ServidoresAFRT-BASH\\Server17\\startServer17.bat',
    START_RUTA_SERVER_18: 'H:\\ServidoresAFRT-BASH\\Server18\\startServer18.bat',
};

const rutasStop = {
    STOP_RUTA_SERVER_0: 'H:\\ServidoresAFRT-BASH\\Server0\\stopServer0.bat',
    STOP_RUTA_SERVER_1: 'H:\\ServidoresAFRT-BASH\\Server1\\stopServer1.bat',
    STOP_RUTA_SERVER_2: 'H:\\ServidoresAFRT-BASH\\Server2\\stopServer2.bat',
    STOP_RUTA_SERVER_3: 'H:\\ServidoresAFRT-BASH\\Server3\\stopServer3.bat',
    STOP_RUTA_SERVER_4: 'H:\\ServidoresAFRT-BASH\\Server4\\stopServer4.bat',
    STOP_RUTA_SERVER_5: 'H:\\ServidoresAFRT-BASH\\Server5\\stopServer5.bat',
    STOP_RUTA_SERVER_6: 'H:\\ServidoresAFRT-BASH\\Server6\\stopServer6.bat',
    STOP_RUTA_SERVER_7: 'H:\\ServidoresAFRT-BASH\\Server7\\stopServer7.bat',
    STOP_RUTA_SERVER_8: 'H:\\ServidoresAFRT-BASH\\Server8\\stopServer8.bat',
    STOP_RUTA_SERVER_9: 'H:\\ServidoresAFRT-BASH\\Server9\\stopServer9.bat',
    STOP_RUTA_SERVER_10: 'H:\\ServidoresAFRT-BASH\\Server10\\stopServer10.bat',
    STOP_RUTA_SERVER_11: 'H:\\ServidoresAFRT-BASH\\Server11\\stopServer11.bat',
    STOP_RUTA_SERVER_12: 'H:\\ServidoresAFRT-BASH\\Server12\\stopServer12.bat',
    STOP_RUTA_SERVER_13: 'H:\\ServidoresAFRT-BASH\\Server13\\stopServer13.bat',
    STOP_RUTA_SERVER_14: 'H:\\ServidoresAFRT-BASH\\Server14\\stopServer14.bat',
    STOP_RUTA_SERVER_15: 'H:\\ServidoresAFRT-BASH\\Server15\\stopServer15.bat',
    STOP_RUTA_SERVER_16: 'H:\\ServidoresAFRT-BASH\\Server16\\stopServer16.bat',
    STOP_RUTA_SERVER_17: 'H:\\ServidoresAFRT-BASH\\Server17\\stopServer17.bat',
    STOP_RUTA_SERVER_18: 'H:\\ServidoresAFRT-BASH\\Server18\\stopServer18.bat',
};

module.exports = { start: rutasStart, stop: rutasStop };