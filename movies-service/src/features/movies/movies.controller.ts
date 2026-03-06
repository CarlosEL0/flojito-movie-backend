// Archivo: src/features/movies/movies.controller.ts
import { Request, Response } from 'express';
import { IMoviesService } from './services/movies.service';

export class MoviesController {
    // Inyección de dependencias: El controlador no sabe CÓMO se obtienen las películas,
    // solo sabe que el servicio que le pasemos cumple con la interfaz IMoviesService.
    constructor(private moviesService: IMoviesService) {}

    getPopularMovies = async (req: Request, res: Response): Promise<void> => {
        try {
            const movies = await this.moviesService.getPopularMovies();
            // Retornamos estado 200 (Success) y nuestro catálogo limpio
            res.status(200).json({
                success: true,
                data: movies
            });
        } catch (error: any) {
            // Manejo de errores amigable
            res.status(500).json({
                success: false,
                message: error.message || 'Error interno del servidor'
            });
        }
    };
}