// create a custom timestamp format for log statements
const SimpleNodeLogger = require('simple-node-logger');

const opts = {
        logFilePath:'./logfile.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss'
    };
const log = SimpleNodeLogger.createSimpleLogger(opts);

module.exports = exports = log;
