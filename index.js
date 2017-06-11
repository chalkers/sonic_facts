const Alexa = require('alexa-sdk');
const https = require('https');
const handlers = require('./fact_handler');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};