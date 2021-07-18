class TextConstants {
    static PRENDER_MINUTOS = 'Por cuantos MINUTOS quieres prender el servidor?... Con un maximo de 180 minutos. Escribe los minutos y aprieta ENTER. \nSi quieres cancelar, escribe "cancelar" (sin comillas, obvio) y aprieta enter. Tienes un minuto para reaccionar a este mensaje. \nEste mensaje sera eliminado en un minuto.';
    static MAX_MINUTOS = 'Como maximo 300 minutos. Vuelve a empezar...';
    static APAGAR_SERVER_ERROR = 'El servidor seleccionado esta apagado. Esta seguro que introdujo el numero correcto?';
    static APAGAR_SERVER_MESSAGE = 'El servidor seleccionado se apagar en 15 segundos';
    static APAGAR_NO_ARGS = 'Por favor, ingresa un numero de algun servidor. Por ejemplo: !afrt apagar 2\nSi no conoces los servidores (presets), tipea \`!afrt servers\` y da enter. \nEste mensaje se eleiminara en 30 segundos';
    static LEVANTAR_NO_ARGS = 'Por favor, ingresa un numero de algun servidor. Por ejemplo: !afrt levantar 2\nSi no conoces los servidores (presets), tipea \`!afrt servers\` y da enter. \nEste mensaje se eleiminara en 30 segundos';
}

module.exports = { TextConstants };