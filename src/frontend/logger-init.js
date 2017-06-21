// see https://github.com/core-process/babel-plugin-js-logger#be-aware
const Logger = require('js-logger');
Logger.useDefaults();
if(process.env.NODE_ENV == 'production') {
  Logger.setLevel(Logger.OFF);
}
