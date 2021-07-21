const path = require('path');

class RutasFolder {
    constructor(){}
    static rutasFolder(ruta) {
        const RUTAS_FOLDER = {
            '0': path.join(__dirname, '../ServidoresAFRT/0-Server-Barcelona-Mixto'),
            '1': path.join(__dirname, '../ServidoresAFRT/1-Server-Brands-Hatch-Mixto'),
            '2': path.join(__dirname, '../ServidoresAFRT/2-Server-Hungaroring-Mixto'),
            '3': path.join(__dirname, '../ServidoresAFRT/3-Server-Imola-Mixto'),
            '4': path.join(__dirname, '../ServidoresAFRT/4-Server-Kyalami-Mixto'),
            '5': path.join(__dirname, '../ServidoresAFRT/5-Server-Laguna-Seca-Mixto'),
            '6': path.join(__dirname, '../ServidoresAFRT/6-Server-Misano-Mixto'),
            '7': path.join(__dirname, '../ServidoresAFRT/7-Server-Monza-Mixto'),
            '8': path.join(__dirname, '../ServidoresAFRT/8-Server-Mount-Panorama-Mixto'),
            '9': path.join(__dirname, '../ServidoresAFRT/9-Server-Nurburgring-Mixto'),
            '10': path.join(__dirname, '../ServidoresAFRT/10-Server-Paul-Ricard-Mixto'),
            '11': path.join(__dirname, '../ServidoresAFRT/11-Server-Silverstone-Mixto'),
            '12': path.join(__dirname, '../ServidoresAFRT/12-Server-Spa-Mixto'),
            '13': path.join(__dirname, '../ServidoresAFRT/13-Server-Suzuka-Mixto'),
            '14': path.join(__dirname, '../ServidoresAFRT/14-Server-Zandvoort-Mixto'),
            '15': path.join(__dirname, '../ServidoresAFRT/15-Server-Zolder-Mixto'),
            '16': path.join(__dirname, '../ServidoresAFRT/16-Server-Donington-Mixto'),
            '17': path.join(__dirname, '../ServidoresAFRT/17-Server-Oulton-Mixto'),
            '18': path.join(__dirname, '../ServidoresAFRT/18-Server-Snetterton-Mixto')
        }
        return RUTAS_FOLDER[ruta]
    }
}

module.exports = { RutasFolder };