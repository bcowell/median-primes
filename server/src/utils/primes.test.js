import medianPrimes from './primes';

describe('Unit testing medianPrimes fn', () => {

    test('n = 10 => [3, 5]', () => {
        expect(medianPrimes(10)).toEqual([3, 5]);
    });

    test('n = 18 => [7]', () => {
        expect(medianPrimes(18)).toEqual([7]);
    });

    test('n = 1 => []', () => {
        expect(medianPrimes(1)).toEqual([]);
    })

    test('n = -2135 => []', () => {
        expect(medianPrimes(-2135)).toEqual([]);
    })
});
