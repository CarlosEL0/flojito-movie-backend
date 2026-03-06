// Archivo: src/features/movies/dto/movie.dto.ts
export interface MovieDTO {
    id: number; 
    title: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
    rating: number;
}