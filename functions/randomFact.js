const facts = require('../facts.json');

function randomFact() {
    const factKeys = Object.keys(facts);
    const randomFactKey = factKeys[Math.floor(Math.random() * factKeys.length)];
    const fact = facts[randomFactKey];
    return fact;
}

module.exports = randomFact;