describe('action', () => {
    var action = require('../module/test.js');
    it('return expected array', () => {
        expect(action()).toEqual(console.log('plop'));
    });
});