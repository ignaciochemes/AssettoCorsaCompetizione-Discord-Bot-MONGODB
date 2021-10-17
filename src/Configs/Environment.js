const dotenv = require('dotenv');

const getEnvironment = () => {
    let env = dotenv.config();
    return env;
}

module.exports = { getEnvironment };