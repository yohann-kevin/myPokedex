// import { fizzBuzz } from "../lib/jasmine_examples/fizzTester.js"

describe('fizzBuzz', () => {
    var fizzBuzz = require('../module/fizzTester.js');
    it('return expected array', () => {
        expect(fizzBuzz(9, 16)).toEqual(['Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });
});