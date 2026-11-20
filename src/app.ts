import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { ValidationError } from './utils/errors.util';
import { NotFoundError } from './utils/errors.util';
import { DatabaseError } from './utils/errors.util';

export const app: Express = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  exposedHeaders: ['X-Request-ID'],
  credentials: true,
  maxAge: 86400,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use((req: Request, res: Response, next: NextFunction) => {
  const requestId = req.headers['x-request-id'] as string || crypto.randomUUID();
  (req as any).requestId = requestId;
  res.setHeader('X-Request-ID', requestId);
  next();
});

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    name: 'reto-express',
    version: '1.0.0',
    description: 'API de gestión de productos con Express y DynamoDB',
    endpoints: {
      products: '/products',
      health: '/health',
    },
    documentation: '/api-docs',
  });
});

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new NotFoundError('Ruta no encontrada'));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error en la aplicación:', {
    message: err.message,
    name: err.name,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
  });

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: 'ValidationError',
      message: err.message,
      timestamp: new Date().toISOString(),
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({
      error: 'NotFoundError',
      message: err.message,
      timestamp: new Date().toISOString(),
    });
  }

  if (err instanceof DatabaseError) {
    return res.status(500).json({
      error: 'DatabaseError',
      message: 'Error interno de base de datos',
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(500).json({
    error: 'InternalServerError',
    message: process.env.NODE_ENV === 'production' 
      ? 'Error interno del servidor' 
      : err.message,
    timestamp: new Date().toISOString(),
  });
});

export default app;