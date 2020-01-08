import { combineReducers } from 'redux';
import primeReducer from './primeReducer';

const rootReducer = combineReducers({
    primes: primeReducer,
})

export default rootReducer;
