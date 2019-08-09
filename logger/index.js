const { createRollingFileLogger } = require('simple-node-logger'),
  opts = {
    logDirectory: 'logs',
    // logDirectory: '../logs',
    fileNamePattern: 'LOGS-<DATE>.log',
    dateFormat: 'DD.MM.YYYY',
    timestampFormat: 'HH:mm:ss.SSS'
  };

module.exports = createRollingFileLogger(opts);
