const path = require('path');

class RutasFolder {
    constructor(){}
    static rutasFolder(ruta) {
        const RUTAS_FOLDER = {
            '0': path.join(__dirname, '../../ServidoresAFRT/Server-Barcelona-Mixto'),
            '1': path.join(__dirname, '../../ServidoresAFRT/Server-Brands-Hatch-Mixto'),
            '2': path.join(__dirname, '../../ServidoresAFRT/Server-Hungaroring-Mixto'),
            '3': path.join(__dirname, '../../ServidoresAFRT/Server-Imola-Mixto'),
            '4': path.join(__dirname, '../../ServidoresAFRT/Server-Kyalami-Mixto'),
            '5': path.join(__dirname, '../../ServidoresAFRT/Server-Laguna-Seca-Mixto'),
            '6': path.join(__dirname, '../../ServidoresAFRT/Server-Misano-Mixto'),
            '7': path.join(__dirname, '../../ServidoresAFRT/Server-Monza-Mixto'),
            '8': path.join(__dirname, '../../ServidoresAFRT/Server-Mount-Panorama-Mixto'),
            '9': path.join(__dirname, '../../ServidoresAFRT/Server-Nurburgring-Mixto'),
            '10': path.join(__dirname, '../../ServidoresAFRT/Server-Paul-Ricard-Mixto'),
            '11': path.join(__dirname, '../../ServidoresAFRT/Server-Silverstone-Mixto'),
            '12': path.join(__dirname, '../../ServidoresAFRT/Server-Spa-Mixto'),
            '13': path.join(__dirname, '../../ServidoresAFRT/Server-Suzuka-Mixto'),
            '14': path.join(__dirname, '../../ServidoresAFRT/Server-Zandvoort-Mixto'),
            '15': path.join(__dirname, '../../ServidoresAFRT/Server-Zolder-Mixto'),
            '16': path.join(__dirname, '../../ServidoresAFRT/Server-Donington-Mixto'),
            '17': path.join(__dirname, '../../ServidoresAFRT/Server-Oulton-Mixto'),
            '18': path.join(__dirname, '../../ServidoresAFRT/Server-Snetterton-Mixto'),
            '19': path.join(__dirname, '../../ServidoresAFRT/Server-Cota-Mixto'),
            '20': path.join(__dirname, '../../ServidoresAFRT/Server-Indianapolis-Mixto'),
            '21': path.join(__dirname, '../../ServidoresAFRT/Server-WatkinsGlen-Mixto'),
        }
        return RUTAS_FOLDER[ruta]
    }
}

module.exports = { RutasFolder };