import primeReducer from './primeReducer';
import { requestPrimes, receivePrimes } from 'actions/primeActions';

const initialState = {
    isLoading: false,
    data: []
}

describe('Prime Reducer', () => {

    test('Should return the initial state', () => {
        expect(primeReducer(undefined, {})).toEqual(initialState)
    });

    test('REQUEST_PRIMES should set isLoading to true', () => {
        expect(primeReducer([], requestPrimes())).toEqual({ isLoading: true });
    });

    test('RECEIVE_PRIMES should set isLoading to false', () => {
        expect(primeReducer([], receivePrimes())).toEqual({ isLoading: false });
    });

    test('RECEIVE_PRIMES should set data', () => {
        const mockResponseData = [47868179];
        expect(primeReducer([], receivePrimes(mockResponseData))).toEqual({ data: mockResponseData, isLoading: false });
    });

})