import React from 'react';
import { useState } from 'react';
import './Primes.scss';

const Primes = props => {

    const PrimeNumbersView = (props) =>
        <div className="numbers center">
            {
                props.isLoading
                    ? 'Loading...'
                    : props.data.length
                        ? JSON.stringify(props.data)
                        : 'Enter a number and click send to calculate median primes.'
            }
        </div>

    return (
        <>
            <ControlView {...props} />
            <PrimeNumbersView {...props} />
        </>
    )

}

const ControlView = (props) => {
    const [n, setN] = useState(0);

    const doFetchPrimes = () => {
        props.fetchPrimes(n);
    }

    const setValue = (event) => {
        const value = parseInt(event.target.value);
        if (value && typeof value === 'number') {
            setN(value);
        }
    }

    return (
        <div className="center">
            <h1>Median Primes</h1>
            <input onChange={setValue} value={n} min={0} placeholder="Enter a number." />
            <button onClick={doFetchPrimes}>SEND</button>
        </div>
    )
}

export default Primes;