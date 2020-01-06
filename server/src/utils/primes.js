import _ from 'lodash';

/**
 * @function medianPrimes
 * @param {number} n 
 * @example = (10) => [3, 5]
 * @example = (18) => [7]
 * 
 * Given an upper limit of n.
 * Return an array of the median prime numbers of the set of prime numbers less than n.
 */

const medianPrimes = (n) => {
    return findMedian(sieveOfEratosthenes(n));
}

// Given an array if odd length return the single median
// otherwise even length return an array of the two medians
const findMedian = (arr) => {
    var middle = Math.floor(arr.length / 2);
    var isEven = arr.length % 2 === 0;
    return isEven ? [arr[middle - 1], arr[middle]] : [arr[middle]];
}

// Sieve of Eratosthenes algorithm [wikipedia page](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
const sieveOfEratosthenes = (n) => {
    // Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
    let primeArr = _.range(0, n + 1).fill(true);

    // Initially, let p equal 2, the smallest prime number.
    // When the algorithm terminates, the numbers remaining in the list are all the primes below n.
    for (let p = 2; p * p <= n; p++) {
        if (primeArr[p]) {
            // Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them as false in the list.
            for (let i = p * p; i <= n; i += p) {
                primeArr[i] = false;
            }
        }
    }
    // Filter the truthy values and create an array of their indices
    let arr = [];
    for (let i = 2; i <= n; i++) {
        if (primeArr[i]) {
            arr.push(i);
        }
    }

    return arr;
}

export default medianPrimes;
