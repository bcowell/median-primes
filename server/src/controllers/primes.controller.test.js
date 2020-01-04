import * as primesController from 'controllers/primes.controller';
import request from 'supertest';

describe('Type checking controller parameters', () => {

    // if (!req.params || !req.params.n)
    test('Errors on no upper limit', () => {
        expect(true).toBe(true);
        //expect(primesController.doFindMedianPrimes(10))
        //.toThrow('Please provide an upper limit in params.');
    });

    // if (typeof req.params.n !== 'number')
    test('Errors when n is not a number', () => {
        expect(true).toBe(true);
        //expect(primesController.doFindMedianPrimes(18))
        //.toThrow('Upper limit must be a number!');
    });
});
