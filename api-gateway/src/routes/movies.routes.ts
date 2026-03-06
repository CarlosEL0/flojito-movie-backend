// Archivo: src/routes/movies.routes.ts
import { Router } from 'express';
import { getPopularMoviesProxy } from '../proxies/movies.proxy';

const router = Router();

// Endpoint expuesto al Frontend
router.get('/popular', getPopularMoviesProxy);

export { router as gatewayMoviesRouter };