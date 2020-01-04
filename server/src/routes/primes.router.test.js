import axios from 'axios';
import { OK } from 'http-status-codes';

describe('Integration tests', () => {

    test('Success response on GET method', async () => {
        expect(true).toBe(true);
        await axios.get('/median-primes/10')
            .expect('Content-Type', /json/)
            .expect(OK)
            .toEqual({ 'status':'success', 'data': [3, 5] });
    });
});
