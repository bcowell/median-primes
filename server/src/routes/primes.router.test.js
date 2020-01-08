import request from 'supertest';
import { OK } from 'http-status-codes';
import app from 'server';

describe('Integration tests', () => {

    test('Success response on GET method', () => {
        request(app)
            .get('/api/v1/median-primes/10')
            .set('Accept', 'application/json')
            .expect(OK, { 'status': 'success', 'data': [3, 5] })
    });
});
