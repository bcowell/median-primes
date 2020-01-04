import { Router } from 'express';
import primesRouter from './primes.router';

const router = Router();

const routes = [
    primesRouter
];

router.use('/v1', routes);

export default router;
