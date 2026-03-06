// Archivo: src/features/movies/services/impl/movies.service.impl.ts
import axios from 'axios';
import { IMoviesService } from '../movies.service';
import { MovieDTO } from '../../dto/movie.dto';
import dotenv from 'dotenv';

dotenv.config();

export class MoviesServiceImpl implements IMoviesService {
    private apiKey = process.env.TMDB_API_KEY;
    private baseUrl = process.env.TMDB_BASE_URL;

    async getPopularMovies(): Promise<MovieDTO[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/popular`, {
                params: {
                    api_key: this.apiKey,
                    language: 'es-MX'
                }
            });

            // Retornamos un array vacío temporalmente
            return []; 
        } catch (error) {
            console.error("Error fetching popular movies from TMDB", error);
            throw new Error("Failed to fetch movies");
        }
    }

    async getMovieById(id: number): Promise<MovieDTO | null> {
        return null;
    }
}