// Archivo: src/features/movies/movies.routes.ts
import { Router } from 'express';
import { MoviesController } from './movies.controller';
import { MoviesServiceImpl } from './services/impl/movies.service.impl';

const router = Router();

//Instanciamos las dependencias
const moviesService = new MoviesServiceImpl();
const moviesController = new MoviesController(moviesService);

// Definimos los endpoints
router.get('/popular', moviesController.getPopularMovies);

export { router as moviesRouter };