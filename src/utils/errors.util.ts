export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

/**
 * Maneja errores y envía la respuesta HTTP adecuada
 * @param error Error capturado
 * @param res Objeto de respuesta Express
 */
export function handleError(error: Error, res: any): void {
    if (error instanceof ValidationError) {
        res.status(400).json({ error: error.message });
    } else if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
    } else if (error instanceof DatabaseError) {
        res.status(500).json({ error: 'Error en la base de datos' });
    } else {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}