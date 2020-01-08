import { REQUEST_PRIMES, RECEIVE_PRIMES } from 'constants/actionTypes';

const initialState = {
    isLoading: false,
    data: []
}

function doReceivePrimes(state, action) {
    if (action.data) {
        return {...state, isLoading: false, data: action.data }
    }
    else { // We had an error occur
        return {...state, isLoading: false }
    }
}

const primeReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_PRIMES: return {...state, isLoading: true }
        case RECEIVE_PRIMES: return doReceivePrimes(state, action);
        default: return state;
    }
}

export default primeReducer;