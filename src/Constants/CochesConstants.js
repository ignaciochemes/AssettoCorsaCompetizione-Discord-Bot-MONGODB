class Coches {
    constructor(){}

    static getCoche(id) {
        const COCHES = {
            '12': "Aston Martin Vantage V12 GT3",
            '20': "Aston Martin Vantage V8 2019",
            '3': "Audi R8 GT3 2015",
            '19': "Audi R8 LMS Evo 2019",
            '11': "Bentley Continental GT3 2015",
            '8': "Bentley Continental GT3 2018	",
            '7': "BMW M6 GT3",
            '14': "Emil Frey Jaguar G3",
            '2': "Ferrari 488 GT3",
            '24': "Ferrari 488 GT3 Evo",
            '17': "Honda NSX GT3",
            '21': "Honda NSX Evo 2019",
            '4': "Lamborghini Huracan GT3",
            '16': "Lamborghini Huracan Evo 2019",
            '15': "Lexus RC F GT3",
            '5': "McLaren 650s GT3",
            '22': "McLaren 720S GT3 Special",
            '1': "Mercedes AMG GT3",
            '25': "Mercedes AMG GT3 2020",
            '10': "Nissan GT-R Nismo GT3 2015",
            '6': "Nissan GT-R Nismo GT3 2018",
            '0': "Porsche 991 GT3",
            '23': "Porsche 991 II GT3 R 2019",
            '30': "BMW M4 GT3",
            '50': "Alpine A110 GT4",
            '51': "Aston Martin Vantage GT4",
            '52': "Audi R8 LMS GT4",
            '53': "BMW M4 GT4",
            '55': "Chevrolet Camaro GT4",
            '56': "Ginetta G55 GT4",
            '57': "KTM X-Bow GT4",
            '58': "Maserati MC GT4",
            '59': "McLaren 570S GT4",
            '60': "Mercedes AMG GT4",
            '18': "Lamborghini Huracan SuperTrofeo",
            '9': "Porsche 991 II GT3 Cup",
        };
        return COCHES[id]
    };

    static getClase(id) {
        const CLASE = {
            '12': "GT3",
            '20': "GT3",
            '3': "GT3",
            '19': "GT3",
            '11': "GT3",
            '8': "GT3",
            '7': "GT3",
            '14': "GT3",
            '2': "GT3",
            '24': "GT3",
            '17': "GT3",
            '21': "GT3",
            '4': "GT3",
            '16': "GT3",
            '15': "GT3",
            '5': "GT3",
            '22': "GT3",
            '1': "GT3",
            '25': "GT3",
            '10': "GT3",
            '6': "GT3",
            '0': "GT3",
            '23': "GT3",
            '30': "GT3",
            '50': "GT4",
            '51': "GT4",
            '52': "GT4",
            '53': "GT4",
            '55': "GT4",
            '56': "GT4",
            '57': "GT4",
            '58': "GT4",
            '59': "GT4",
            '60': "GT4",
            '18': "ST",
            '9': "CUP",
        };
        return CLASE[id]
    };
}

module.exports = { Coches };