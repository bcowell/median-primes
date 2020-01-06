# median-primes
Given an upper limit of n.
Return an array of the median prime numbers of the set of prime numbers less than n.

Uses Sieve of Eratosthenes algorithm [wikipedia page](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

# Getting Started
- Frontend React/Redux (bootstrapped with Create-React-App)
- Backend Node/Express (babel to transpile ES6/7)

You must install both the client and server before you can run them.

## `yarn` or `yarn install`

# Available Scripts

In both directories, you can run:

## `yarn start`

Runs the app in the development mode.<br />
The client runs on [http://localhost:3000](http://localhost:3000).<br />
The server on [http://localhost:3001](http://localhost:3001).

## `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `yarn build`

Builds the app for production to the `build` folder.<br />

## Algorithm
```typescript
const sieveOfEratosthenes = (n) => {
    // Create a list to hold our prime integers from 2 through n: (2, 3, 5, ..., n).
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
```
n = 1,000,000 took ~1.5s on an old MacBook Air

## License
MIT