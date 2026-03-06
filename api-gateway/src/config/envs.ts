// Archivo: src/config/envs.ts
import dotenv from 'dotenv';
dotenv.config();

export const envs = {
    PORT: process.env.PORT || 4000,
    MOVIES_SERVICE_URL: process.env.MOVIES_SERVICE_URL || 'http://localhost:4001',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000'
};