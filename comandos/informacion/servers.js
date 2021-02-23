const fs = require('fs');
const find = require('find-process');
const ping = require('ping');

//Path Folder
const RUTA_FOLDER = 'D:/Servicios/AFRT/ServidoresAFRT'; 

//Variable de todas las carpetas
let carpetas = [];

let server0 = [];
let server1 = [];
let server2 = [];
let server3 = [];
let server4 = [];
let server5 = [];
let server6 = [];
let server7 = [];
let server8 = [];
let server9 = [];
let server10 = [];
let server11 = [];
let server12 = [];
let server13 = [];
let server14 = [];
let server15 = [];
let server16 = [];
let server17 = [];
let server18 = [];

module.exports = {
    name: "servers",
    aliases: ["sv"],
    category: "informacion",
    description: "Retorna todos los servidores disponibles (presets)",
    usage: "!afrt servers",
    run: async(client, message, args) => {
        await fs.readdir(RUTA_FOLDER, function (err, archivos) {
            if (err) {
                onError(err);
                return;
            } else {
                carpetas = archivos;
            }
            //console.log(archivos);
            //archivos.forEach(carpetasInside => {
                //console.log(archivos);
            //})
            //message.channel.send(archivos);
        });

        //Pingeamos a la direccion 8.8.8.8
        let res = await ping.promise.probe(`8.8.8.8`, {
            timeout: 2,
        });

        //Comienzo de Ping
        //Verificamos si los servidores estan apagados.

        await find('port', 9621)
            .then(function (list) {
                if (!list.length) {
                    server0 = `${carpetas[0]} = \`OFF\``;
                } else {
                    server0 = `${carpetas[0]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9622)
            .then(function (list) {
                if (!list.length) {
                    server1 = `${carpetas[1]} = \`OFF\``;
                } else {
                    server1 = `${carpetas[1]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9623)
            .then(function (list) {
                if (!list.length) {
                    server2 = `${carpetas[11]} = \`OFF\``; // 2 = 10
                } else {
                    server2 = `${carpetas[11]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9624)
            .then(function (list) {
                if (!list.length) {
                    server3 = `${carpetas[12]} = \`OFF\``; // 9 17
                } else {
                    server3 = `${carpetas[12]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9625)
            .then(function (list) {
                if (!list.length) {
                    server4 = `${carpetas[13]} = \`OFF\``; // 10 18
                } else {
                    server4 = `${carpetas[13]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9626)
            .then(function (list) {
                if (!list.length) {
                    server5 = `${carpetas[14]} = \`OFF\``;
                } else {
                    server5 = `${carpetas[14]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9627)
            .then(function (list) {
                if (!list.length) {
                    server6 = `${carpetas[15]} = \`OFF\``;
                } else {
                    server6 = `${carpetas[15]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9628)
            .then(function (list) {
                if (!list.length) {
                    server7 = `${carpetas[16]} = \`OFF\``;
                } else {
                    server7 = `${carpetas[16]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9629)
            .then(function (list) {
                if (!list.length) {
                    server8 = `${carpetas[17]} = \`OFF\``;
                } else {
                    server8 = `${carpetas[17]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9630)
            .then(function (list) {
                if (!list.length) {
                    server9 = `${carpetas[18]} = \`OFF\``;
                } else {
                    server9 = `${carpetas[18]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9631)
            .then(function (list) {
                if (!list.length) {
                    server10 = `${carpetas[2]} = \`OFF\``;
                } else {
                    server10 = `${carpetas[2]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9632)
            .then(function (list) {
                if (!list.length) {
                    server11 = `${carpetas[3]} = \`OFF\``;
                } else {
                    server11 = `${carpetas[3]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9633)
            .then(function (list) {
                if (!list.length) {
                    server12 = `${carpetas[4]} = \`OFF\``;
                } else {
                    server12 = `${carpetas[4]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9634)
            .then(function (list) {
                if (!list.length) {
                    server13 = `${carpetas[5]} = \`OFF\``;
                } else {
                    server13 = `${carpetas[5]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9635)
            .then(function (list) {
                if (!list.length) {
                    server14 = `${carpetas[6]} = \`OFF\``;
                } else {
                    server14 = `${carpetas[6]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9636)
            .then(function (list) {
                if (!list.length) {
                    server15 = `${carpetas[7]} = \`OFF\``;
                } else {
                    server15 = `${carpetas[7]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9637)
            .then(function (list) {
                if (!list.length) {
                    server16 = `${carpetas[8]} = \`OFF\``;
                } else {
                    server16 = `${carpetas[8]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9638)
            .then(function (list) {
                if (!list.length) {
                    server17 = `${carpetas[9]} = \`OFF\``;
                } else {
                    server17 = `${carpetas[9]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        await find('port', 9639)
            .then(function (list) {
                if (!list.length) {
                    server18 = `${carpetas[10]} = \`OFF\``;
                } else {
                    server18 = `${carpetas[10]} = \`ON\` Con un ping de: \`${Math.floor(res.avg)}\` MS`;
                }
            });
        
        console.log(carpetas);
        await message.reply(`Si quieres puedes levantar cualquiera de los servidores ahora mencionados. Para ello, tienes que teclear \`!afrt levantar\` + el numero.
        \nTambien puedes obtener informacion de cada servidor tecleando \`!afrt informacion\` + el numero del servidor. Ejemplo: \`!afrt informacion 12\`.
        \n${server0} \n${server1} \n${server2} \n${server3} \n${server4} \n${server5} \n${server6} \n${server7} \n${server8} \n${server9} \n${server10} \n${server11} \n${server12} \n${server13} \n${server14} \n${server15} \n${server16} \n${server17} \n${server18}`);
        console.log("Se ejecuto el comando !afrt servers");
    }
}