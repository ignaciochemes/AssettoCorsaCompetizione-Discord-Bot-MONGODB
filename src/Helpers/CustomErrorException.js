class CustomErrorException {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

module.exports = { CustomErrorException };