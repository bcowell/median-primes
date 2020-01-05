import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import medianPrimes from 'utils/primes';

export const doFindMedianPrimes = async (req, res) => {

    try {
        if (!req.params || !req.params.n) { throw Error('Please provide an upper limit in params.') }
        const n = parseInt(req.params.n);
        if (typeof n !== 'number') { throw Error('Upper limit must be a number!') }

        const data = await medianPrimes(n);
        return res
            .status(OK)
            .send({ 'status': 'success', 'data': data });
    }
    catch (err) {
        return res
            .status(INTERNAL_SERVER_ERROR)
            .send({ 'status': 'error', 'error': err });
    }
}
