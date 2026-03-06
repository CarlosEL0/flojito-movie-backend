// Archivo: src/features/movies/services/movies.service.ts
import { MovieDTO } from '../dto/movie.dto';

export interface IMoviesService {
    getPopularMovies(): Promise<MovieDTO[]>;
    getMovieById(id: number): Promise<MovieDTO | null>; 
}