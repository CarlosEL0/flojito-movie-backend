// Archivo: src/index.ts
import express, { Application } from 'express';
import cors from 'cors';
import { envs } from './config/envs';
import { gatewayMoviesRouter } from './routes/movies.routes';

const app: Application = express();

// Configuración estricta de CORS (Buena Práctica de Seguridad)
// Solo permitiremos peticiones que vengan de tu Frontend en Next.js
app.use(cors({
    origin: envs.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Montaje de rutas del Gateway
app.use('/api/movies', gatewayMoviesRouter);

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Ruta no encontrada en el Gateway' });
});

app.listen(envs.PORT, () => {
    console.log(`🛡️  API Gateway orquestando en http://localhost:${envs.PORT}`);
});