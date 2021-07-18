const { connect } = require('mongoose');
const configJson = require('../config.json');

class DatabaseConnection {
    static _instancia;
    constructor(){
        this.dbConnection();
    }

    static getInstancia() {
        if(DatabaseConnection._instancia) throw new Error('Ya existe una instancia de DatabaseConnection');
        DatabaseConnection._instancia = new DatabaseConnection();
        return DatabaseConnection._instancia;
    }

    async dbConnection() {
        await connect(configJson.DB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => { console.log('Base de datos conectada!') })
        .catch(() => { console.log('Error al conectar con la base de datos!') })
    };
}

module.exports = { DatabaseConnection };