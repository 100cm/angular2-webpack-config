/**
 * Created by atyun on 9/18/16.
 */
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'test':
    case 'testing':
        module.exports = require('./config/webpack.test');
        break;
    case 'dev':
    default:
        module.exports = require('./config/webpack.dev');
}
