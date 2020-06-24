// const { ConsoleReporter } = require('jasmine');

describe('action', () => {
    var action = require('../module/test.js');
    it('return expected array', () => {
        expect(action()).toEqual('plop');
    });
});