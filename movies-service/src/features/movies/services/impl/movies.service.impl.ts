// Archivo: src/features/movies/services/impl/movies.service.impl.ts
import axios from 'axios';
import { IMoviesService } from '../movies.service';
import { MovieDTO } from '../../dto/movie.dto';
import { MoviesMapper } from '../../mappers/movies.mapper';
import dotenv from 'dotenv';

dotenv.config();

export class MoviesServiceImpl implements IMoviesService {
    private apiKey = process.env.TMDB_API_KEY;
    private baseUrl = process.env.TMDB_BASE_URL;

    async getPopularMovies(): Promise<MovieDTO[]> {
        if (!this.apiKey) throw new Error("API Key de TMDB no configurada en el .env");

        try {
            const response = await axios.get(`${this.baseUrl}/movie/popular`, {
                params: {
                    api_key: this.apiKey,
                    language: 'es-MX',
                    page: 1
                }
            });

            // Mapeamos el arreglo de resultados que devuelve TMDB a nuestro DTO
            const rawMovies = response.data.results;
            return rawMovies.map((movie: any) => MoviesMapper.toDTO(movie));
            
        } catch (error) {
            console.error("[MoviesService] Error consumiendo TMDB:", error);
            throw new Error("No se pudieron obtener las películas populares.");
        }
    }

    async getMovieById(id: number): Promise<MovieDTO | null> {
        // Dejamos la base lista para el futuro
        return null;
    }
}