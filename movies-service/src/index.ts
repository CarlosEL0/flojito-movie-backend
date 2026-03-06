// Archivo: src/index.ts
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { moviesRouter } from './features/movies/movies.routes';

// Cargar variables de entorno ANTES de usar cualquier otra cosa
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4001;

// Middlewares Globales
app.use(express.json()); // Para parsear el body a JSON
app.use(cors()); // Seguridad CORS requerida por la rúbrica

// Montaje de Rutas
// Todas las rutas de películas tendrán el prefijo /api/movies
app.use('/api/movies', moviesRouter);

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Movies Service corriendo en http://localhost:${PORT}`);
});