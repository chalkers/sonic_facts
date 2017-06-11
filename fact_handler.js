const responses = require('./responses.json');
const randomFact = require('./functions/randomFact');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', responses.LaunchRequest.ask, responses.LaunchRequest.reprompt);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', responses["AMAZON.HelpIntent"].ask, responses["AMAZON.HelpIntent"].reprompt);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', responses["AMAZON.StopIntent"].tell);
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'SessionEndedRequest': function () {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'GetFact': function () {
        const fact = randomFact();

        if (definition) {
            this.emit(":tellWithCard", fact.fact, "Sonic Fact", fact.fact);
        } else {
            this.emit(":tell", "I'm sorry, something went wrong.");
        }
    }
};

module.exports = handlers;