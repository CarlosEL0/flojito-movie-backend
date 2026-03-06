// Archivo: src/features/movies/mappers/movies.mapper.ts
import { MovieDTO } from '../dto/movie.dto';

export class MoviesMapper {
    // Usamos 'any' aquí porque es el dato crudo que viene de la red, 
    // pero garantizamos que la salida sea estrictamente nuestro MovieDTO.
    static toDTO(tmdbMovie: any): MovieDTO {
        return {
            id: tmdbMovie.id,
            title: tmdbMovie.title || tmdbMovie.original_title,
            overview: tmdbMovie.overview,
            posterPath: tmdbMovie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` 
                : '', 
            releaseDate: tmdbMovie.release_date,
            rating: tmdbMovie.vote_average
        };
    }
}