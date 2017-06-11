const assert = require("chai").assert;
const randomFact = require('../../functions/randomFact');

describe("function randomFact()", () => {
    it("should return an object with a fact attribute which is a string", () => {
        const fact = randomFact();
        assert(typeof fact, 'object');
        assert(typeof fact.fact, 'string');
    });
});