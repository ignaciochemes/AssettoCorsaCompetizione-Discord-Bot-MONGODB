class TextConstants {
    static PRENDER_MINUTOS = 'Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.';
    static MAX_MINUTOS = 'Como maximo 300 minutos. Vuelve a empezar...';
    static TABLA_NO_ARGS = 'Introduce una pista para ver la tabla de tiempos';
    static TABLA_ERROR_PISTA = 'La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto.';
    static TABLA_NO_TIEMPOS = 'Aun no se registraron tiempos en esta pista';
    static APAGAR_ERROR = 'El servidor seleccionado esta apagado. Esta seguro que introdujo el numero correcto?';
    static APAGAR_DONE = 'El servidor seleccionado se apagara en 15 segundos';
    static SERVER_INFO_NO_ARGS = 'Por favor ingresa algun servidor para buscar informacion. Por ejemplo: \`!afrt informacion 3\`.';
    static HELP_LIST_COMMANDS = 'Lista de comandos \nPrefijo \`!afrt\`\nEj: \`!afrt servers\`';
}

module.exports = { TextConstants };