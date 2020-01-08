import React from 'react';
import PrimeContainer from './primeContainer';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = ({ store }) =>
    <Provider store={store}>
        <PrimeContainer />
        <ToastContainer 
            position="bottom-right"
            autoClose={2500}
            closeOnClick
            pauseOnHover
        />
    </Provider>

export default Root;