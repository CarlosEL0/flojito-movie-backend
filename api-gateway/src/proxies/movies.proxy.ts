// Archivo: src/proxies/movies.proxy.ts
import axios from 'axios';
import { Request, Response } from 'express';
import { envs } from '../config/envs';

export const getPopularMoviesProxy = async (req: Request, res: Response): Promise<void> => {
    try {
        // El Gateway hace la petición al microservicio interno (Puerto 4001)
        const response = await axios.get(`${envs.MOVIES_SERVICE_URL}/api/movies/popular`);
        
        // Devolvemos al cliente exactamente lo que respondió el microservicio
        res.status(response.status).json(response.data);
    } catch (error: any) {
        console.error('[API Gateway] Error comunicando con Movies Service:', error.message);
        
        // Manejo de errores en cascada
        const status = error.response?.status || 500;
        const data = error.response?.data || { 
            success: false, 
            message: 'Error de comunicación en el Gateway orquestador' 
        };
        
        res.status(status).json(data);
    }
};