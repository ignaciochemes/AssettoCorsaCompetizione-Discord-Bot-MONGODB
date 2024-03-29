class TextConstants {
    static PRENDER_MINUTOS = 'Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 300 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.';
    static MAX_MINUTOS = 'Como maximo 300 minutos. Vuelve a empezar...';
    static MIN_MINUTOS = 'No es posible prender un servidor con menos de 5 minutos. Vuelve a empezar...';
    static TABLA_NO_ARGS = 'Introduce una pista para ver la tabla de tiempos';
    static TABLA_ERROR_PISTA = 'La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto.';
    static TABLA_NO_TIEMPOS = 'Aun no se registraron tiempos en esta pista';
    static APAGAR_ERROR = 'El servidor seleccionado esta apagado. Esta seguro que introdujo el numero correcto?';
    static APAGAR_DONE = 'El servidor seleccionado se apagara en 15 segundos';
    static SERVER_INFO_NO_ARGS = 'Por favor ingresa algun servidor para buscar informacion. Por ejemplo: \`!afrt informacion 3\`.';
    static HELP_LIST_COMMANDS = 'Lista de comandos \nPrefijo \`!afrt\`\nEj: \`!afrt servers\`';
    static SERVER_ALREADY_RUNNING = 'El servidor ya esta en funcionamiento';
    static SERVER_STARTED = 'El servidor se ha iniciado correctamente';
    static SERVER_NOT_STARTED = 'El servidor no se ha iniciado correctamente';
}

module.exports = { TextConstants };