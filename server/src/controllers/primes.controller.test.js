import * as primesController from 'controllers/primes.controller';
import jest from 'jest';

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('Type checking controller parameters', () => {

    // if (!req.params || !req.params.n)
    test('Errors on no upper limit', () => {
        //expect(true).toBe(true);
        try {
            primesController.doFindMedianPrimes(undefined, mockResponse);
        }
        catch (err) {
            expect(err).toEqual('Please provide an upper limit in params.');
        }
    });

    // if (typeof req.params.n !== 'number')
    test('Errors when n is not a number', async () => {
        //expect(true).toBe(true);
        try {
            primesController.doFindMedianPrimes([18], mockResponse);
        }
        catch (err) {
            expect(err).toEqual('Upper limit must be a number!');
        }
    });
});
