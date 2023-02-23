class TextConstants {
    static PRENDER_MINUTOS = 'For how many MINUTES do you want to turn on the server?... With a maximum of 300 minutes. Type the minutes and press ENTER. \nIf you want to cancel, type "cancel" (without quotes, obviously) and hit enter. You have one minute to react to this message.\nThis message will be deleted in a minute.';
    static MAX_MINUTOS = 'At most 300 minutes. Start again...';
    static MIN_MINUTOS = 'It is not possible to turn on a server with less than 5 minutes. Start again...';
    static TABLA_NO_ARGS = 'Enter a track to see the time table';
    static TABLA_ERROR_PISTA = 'The chosen track is not recognized. Here is a list of tracks that I accept.';
    static TABLA_NO_TIEMPOS = 'No times have been recorded on this track yet.';
    static APAGAR_ERROR = 'The selected server is off. Are you sure you entered the correct number?';
    static APAGAR_DONE = 'The selected server will shutdown in 15 seconds.';
    static SERVER_INFO_NO_ARGS = 'Please enter a server to search for information. For example: \`/information 3\`.';
    static HELP_LIST_COMMANDS = 'Command list \nExample: \`/servers\`';
    static SERVER_ALREADY_RUNNING = 'The server is already running.';
    static SERVER_STARTED = 'The server has started successfully.';
    static SERVER_NOT_STARTED = 'The server has not started correctly.';
}

module.exports = { TextConstants };