const dotenv = require('dotenv');
const path = require('path');
const { EnvironmentConstants } = require('../Constants/EnvironmentConstants');

let envData = {};

const getEnvironment = () => {
    switch (process.env.AFRT_ENV) {
        case EnvironmentConstants.PROD:
            envData = dotenv.config({ path: path.resolve(__dirname, '../../.env') }).parsed;
            console.log(envData);
            console.log('Environment: Production');
            break;
        case EnvironmentConstants.DEV:
            envData = dotenv.config({ path: path.resolve(__dirname, '../../.env.dev') }).parsed;
            console.log(envData)
            console.log(process.env.PREFIX);
            console.log('Environment: Development');
            break
        default:
            envData = dotenv.config().parsed;
    }
}

module.exports = { getEnvironment };