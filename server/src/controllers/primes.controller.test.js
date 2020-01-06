import * as primesController from 'controllers/primes.controller';

const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
};

describe('Type checking controller parameters', () => {

    // if (!req.params || !req.params.n)
    test('Errors on no upper limit', () => {
        try {
            primesController.doFindMedianPrimes(undefined, res);
        }
        catch (err) {
            expect(err).toEqual('Please provide an upper limit in params.');
        }
    });

    // if (typeof req.params.n !== 'number')
    test('Errors when n is not a number', () => {
        try {
            primesController.doFindMedianPrimes('eightteen', res);
        }
        catch (err) {
            expect(err).toEqual('Upper limit must be a number!');
        }
    });
});
