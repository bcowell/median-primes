import { Router } from 'express';
import * as primesController from 'controllers/primes.controller';

const router = Router();

router.get('/median-primes/:n', primesController.doFindMedianPrimes);

export default router;