import React from 'react';
import { connect } from 'react-redux';
import { fetchPrimesOnce } from 'actions/primeActions';
import Primes from 'components/Primes';

const PrimeContainer = (props) => {

    let { isLoading, data, fetchPrimes } = props;

    return (
        <div style={{ minHeight: "105vh" }}>
            <Primes data={data} isLoading={isLoading} fetchPrimes={fetchPrimes} />
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.primes.data,
    isLoading: state.primes.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchPrimes: (n) => dispatch(fetchPrimesOnce(n)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrimeContainer)
