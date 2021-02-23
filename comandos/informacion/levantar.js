const { spawn } = require('child_process');
const find = require('find-process');
const fs = require('fs');
const { promisify } = require('util');

const rutas = require('../../comandos-bash/constantes');
//Variables Minutos a contratar vacias
let minutosContratarServer0 = [];
let minutosContratarServer1 = [];
let minutosContratarServer2 = [];
let minutosContratarServer3 = [];
let minutosContratarServer4 = [];
let minutosContratarServer5 = [];
let minutosContratarServer6 = [];
let minutosContratarServer7 = [];
let minutosContratarServer8 = [];
let minutosContratarServer9 = [];
let minutosContratarServer10 = [];
let minutosContratarServer11 = [];
let minutosContratarServer12 = [];
let minutosContratarServer13 = [];
let minutosContratarServer14 = [];
let minutosContratarServer15 = [];
let minutosContratarServer16 = [];
let minutosContratarServer17 = [];
let minutosContratarServer18 = [];

module.exports = {
    name: "levantar",
    aliases: ["lv"],
    category: "informacion",
    description: "Con este comando puedes levantar un servidor de preset",
    usage: "!afrt levantar",
    run: async(client, message, args) => {
        if (!args[0]) return message.reply(`Por favor, ingresa un numero de algun servidor. Por ejemplo: !afrt levantar 2\nSi no conoces los servidores (presets), tipea \`!afrt servers\` y da enter. \nEste mensaje se eleiminara en 30 segundos`)
            .then(m => m.delete({timeout: 30000}));

        if (args[0] === '0') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer0 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer0}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
   
                find('port', 9621)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer0 = spawn(rutas.start.START_RUTA_SERVER_0, ['-lh', '/usr']);
                                startServer0.stdout.on('data', (data) => {
                                    //return message.channel.send(``)
                                    //.then(m => m.delete({timeout: 15000}));
                                });
                                startServer0.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer0.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer0}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs0r = Math.floor(minutosContratarServer0*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs0r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer0 = spawn(rutas.stop.STOP_RUTA_SERVER_0, ['-lh', '/usr']);
                                stopServer0.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs0r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '1') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer1 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer1}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9622)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer1 = spawn(rutas.start.START_RUTA_SERVER_1, ['-lh', '/usr']);
                                startServer1.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer1.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer1.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer1}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs1r = Math.floor(minutosContratarServer1*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);

                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs1r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer1 = spawn(rutas.stop.STOP_RUTA_SERVER_1, ['-lh', '/usr']);
                                stopServer1.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs1r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '2') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer2 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer2}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9623)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer2 = spawn(rutas.start.START_RUTA_SERVER_2, ['-lh', '/usr']);
                                startServer2.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer2.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer2.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer2}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs2r = Math.floor(minutosContratarServer2*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs2r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer2 = spawn(rutas.stop.STOP_RUTA_SERVER_2, ['-lh', '/usr']);
                                stopServer2.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs2r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '3') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer3 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer3}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9624)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer3 = spawn(rutas.start.START_RUTA_SERVER_3, ['-lh', '/usr']);
                                startServer3.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer3.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer3.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer3}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs3r = Math.floor(minutosContratarServer3*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs3r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer3 = spawn(rutas.stop.STOP_RUTA_SERVER_3, ['-lh', '/usr']);
                                stopServer3.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs3r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '4') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer4 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer4}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9625)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer4 = spawn(rutas.start.START_RUTA_SERVER_4, ['-lh', '/usr']);
                                startServer4.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer4.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer4.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer4}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs4r = Math.floor(minutosContratarServer4*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs4r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer4 = spawn(rutas.stop.STOP_RUTA_SERVER_4, ['-lh', '/usr']);
                                stopServer4.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs4r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '5') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer5 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer5}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9626)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer5 = spawn(rutas.start.START_RUTA_SERVER_5, ['-lh', '/usr']);
                                startServer5.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer5.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer5.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer5}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs5r = Math.floor(minutosContratarServer5*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs5r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer5 = spawn(rutas.stop.STOP_RUTA_SERVER_5, ['-lh', '/usr']);
                                stopServer5.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs5r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '6') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer6 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer6}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9627)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer6 = spawn(rutas.start.START_RUTA_SERVER_6, ['-lh', '/usr']);
                                startServer6.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer6.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer6.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer6}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs6r = Math.floor(minutosContratarServer6*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs6r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer6 = spawn(rutas.stop.STOP_RUTA_SERVER_6, ['-lh', '/usr']);
                                stopServer6.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs6r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '7') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer7 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer7}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9628)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer7 = spawn(rutas.start.START_RUTA_SERVER_7, ['-lh', '/usr']);
                                startServer7.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer7.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer7.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer7}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs7r = Math.floor(minutosContratarServer7*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs7r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer7 = spawn(rutas.stop.STOP_RUTA_SERVER_7, ['-lh', '/usr']);
                                stopServer7.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs7r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '8') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer8 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer8}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9629)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer8 = spawn(rutas.start.START_RUTA_SERVER_8, ['-lh', '/usr']);
                                startServer8.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer8.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer8.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer8}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs8r = Math.floor(minutosContratarServer8*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs8r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer8 = spawn(rutas.stop.STOP_RUTA_SERVER_8, ['-lh', '/usr']);
                                stopServer8.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs8r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '9') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer9 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer9}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9630)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer9 = spawn(rutas.start.START_RUTA_SERVER_9, ['-lh', '/usr']);
                                startServer9.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer9.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer9.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer9}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs9r = Math.floor(minutosContratarServer9*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs9r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer9 = spawn(rutas.stop.STOP_RUTA_SERVER_9, ['-lh', '/usr']);
                                stopServer9.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs9r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '10') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer10 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer10}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9631)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer10 = spawn(rutas.start.START_RUTA_SERVER_10, ['-lh', '/usr']);
                                startServer10.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer10.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer10.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer10}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs10r = Math.floor(minutosContratarServer10*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs10r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer10 = spawn(rutas.stop.STOP_RUTA_SERVER_10, ['-lh', '/usr']);
                                stopServer10.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs10r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '11') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer11 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer11}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9632)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer11 = spawn(rutas.start.START_RUTA_SERVER_11, ['-lh', '/usr']);
                                startServer11.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer11.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer11.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer11}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs11r = Math.floor(minutosContratarServer11*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs11r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer11 = spawn(rutas.stop.STOP_RUTA_SERVER_11, ['-lh', '/usr']);
                                stopServer11.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs11r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '12') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer12 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer12}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9633)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer12 = spawn(rutas.start.START_RUTA_SERVER_12, ['-lh', '/usr']);
                                startServer12.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer12.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer12.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer12}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs12r = Math.floor(minutosContratarServer12*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs12r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer12 = spawn(rutas.stop.STOP_RUTA_SERVER_12, ['-lh', '/usr']);
                                stopServer12.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs12r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '13') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer13 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer13}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9634)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer13 = spawn(rutas.start.START_RUTA_SERVER_13, ['-lh', '/usr']);
                                startServer13.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer13.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer13.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer13}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);
                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs13r = Math.floor(minutosContratarServer13*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs13r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer13 = spawn(rutas.stop.STOP_RUTA_SERVER_13, ['-lh', '/usr']);
                                stopServer13.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs13r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '14') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer14 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer14}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9635)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer14 = spawn(rutas.start.START_RUTA_SERVER_14, ['-lh', '/usr']);
                                startServer14.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer14.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer14.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer14}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs14r = Math.floor(minutosContratarServer14*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs14r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer14 = spawn(rutas.stop.STOP_RUTA_SERVER_14, ['-lh', '/usr']);
                                stopServer14.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs14r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '15') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer15 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer15}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }
                find('port', 9636)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer15 = spawn(rutas.start.START_RUTA_SERVER_15, ['-lh', '/usr']);
                                startServer15.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                                startServer15.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer15.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer15}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs15r = Math.floor(minutosContratarServer15*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs15r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer15 = spawn(rutas.stop.STOP_RUTA_SERVER_15, ['-lh', '/usr']);
                                stopServer15.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs15r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '16') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer16 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer16}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }

                find('port', 9637)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer16 = spawn(rutas.start.START_RUTA_SERVER_16, ['-lh', '/usr']);
                                startServer16.stdout.on('data', (data) => {
                                    //return message.channel.send(``)
                                    //.then(m => m.delete({timeout: 15000}));
                                });
                                startServer16.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer16.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer16}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs16r = Math.floor(minutosContratarServer16*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs16r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer16 = spawn(rutas.stop.STOP_RUTA_SERVER_16, ['-lh', '/usr']);
                                stopServer16.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs16r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '17') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer17 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer17}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }

                find('port', 9638)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer17 = spawn(rutas.start.START_RUTA_SERVER_17, ['-lh', '/usr']);
                                startServer17.stdout.on('data', (data) => {
                                    //return message.channel.send(``)
                                    //.then(m => m.delete({timeout: 15000}));
                                });
                                startServer17.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer17.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer17}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs17r = Math.floor(minutosContratarServer17*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs17r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer17 = spawn(rutas.stop.STOP_RUTA_SERVER_17, ['-lh', '/usr']);
                                stopServer17.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs17r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        if (args[0] === '18') {
            const filter = m => m.author.id === message.author.id;

            message.reply(`Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.`)
                .then(r => r.delete({timeout: 60000}));

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                minutosContratarServer18 = collected.first().content;

                if (collected.first().content === "cancelar") {
                    return message.reply("Cancelado!");
                }
                if (collected.first().content > 300) {
                    return message.reply(`Como maximo 300 minutos. Ingresaste ${minutosContratarServer18}. Vuelve a empezar...`);
                }
                if (!collected.first().content) {
                    return message.reply(`Ingresa la cantidad de minutos que quieres contratar el servidor. Vuelve a empezar...`);
                }

                find('port', 9639)
                    .then(function (list) {
                        if (!list.length) {
                            try {
                                const startServer18 = spawn(rutas.start.START_RUTA_SERVER_18, ['-lh', '/usr']);
                                startServer18.stdout.on('data', (data) => {
                                    //return message.channel.send(``)
                                    //.then(m => m.delete({timeout: 15000}));
                                });
                                startServer18.stderr.on('data', (data) => {
                                    return console.error(`stderr: ${data}`);
                                });
                                startServer18.on('close', (code) => {
                                    return console.log(`child process exited with code ${code}`);
                                });
                                setTimeout(function(){
                                    message.reply(`El servidor \`${args}\` se levanto perfectamente con una duracion de \`${minutosContratarServer18}\` minutos. 
                                \nPuede corroborarlo con el comando \`!afrt servers\``);
                                }, 5000);

                            } catch (e) {
                                if (e) {
                                    console.error(e);
                                    return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                                        .then(m => m.delete({timeout: 10000}, client.destroy()))
                                }
                            }
                            let mcs18r = Math.floor(minutosContratarServer18*60000);
                            const CINCOMINUTOS = Math.floor(5*60000);
                            setTimeout(function(){
                                message.reply(`El servidor se apagara en \`5 minutos\``)
                            }, Math.floor(mcs18r-CINCOMINUTOS));
                            setTimeout(function(){
                                const stopServer18 = spawn(rutas.stop.STOP_RUTA_SERVER_18, ['-lh', '/usr']);
                                stopServer18.stdout.on('data', (data) => {
                                    return message.channel.send(`${data}`)
                                        .then(m => m.delete({timeout: 15000}));
                                });
                            }, Math.floor(mcs18r));
                        } else {
                            message.reply(`El servidor ${args[0]} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                                .then(m => m.delete({timeout: 10000}));
                        }
                    });
            });
        }
        //await message.channel.send(STDOUT);
        console.log("Se ejecuto el comando !afrt levantar");
    }
}