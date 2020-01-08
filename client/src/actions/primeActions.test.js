import { receivePrimes, getPrimes } from './primeActions';
import { RECEIVE_PRIMES } from 'constants/actionTypes';

describe('Test primeActions', () => {

    test('Should set data on receive', () => {
        const data = [3,5];
        const expectedAction = {
          type: RECEIVE_PRIMES,
          data
        }
        expect(receivePrimes(data)).toEqual(expectedAction)
      });
    
  })