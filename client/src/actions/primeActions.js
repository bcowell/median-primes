import axios from 'axios';
import { baseURL } from 'constants/api';
import { REQUEST_PRIMES, RECEIVE_PRIMES } from 'constants/actionTypes';
import { toast } from 'react-toastify';

export function requestPrimes() {
    return {
        type: REQUEST_PRIMES
    }
}

export function receivePrimes(data) {
    return {
        type: RECEIVE_PRIMES,
        data
    }
}

export async function getPrimes(url, dispatch) {
    try {
        const res = await axios.get(url);
        toast('SUCCESS', { type: toast.TYPE.SUCCESS });
        dispatch(receivePrimes(res.data.data));
    }
    catch (err) {
        toast('ERROR', { type: toast.TYPE.ERROR });
        dispatch(receivePrimes());
    }
}

function fetchPrimes(n) {
    return dispatch => {
        dispatch(requestPrimes(n));
        toast(`Fetching median primes of ${n}...`);
        let url = `${baseURL}/median-primes/${n}`
        getPrimes(url, dispatch);
    }
}

// Make sure we don't send multiple requests
function shouldFetchPrimes(state) {
    const primes = state.primes
    return !primes.isLoading;
}

export function fetchPrimesOnce(n) {
    return (dispatch, getState) => {
        if (shouldFetchPrimes(getState())) {
            return dispatch(fetchPrimes(n));
        }
    }
}
