import { Router, Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';
import { validateProductCreate, validateProductUpdate } from '../utils/validation.util';
import { handleError } from '../utils/errors.util';
import { dynamoDBClient } from '../config/dynamodb.config';

// Capa de interfaz HTTP: traduce cada petición en una llamada al servicio
// y cada error de dominio en una respuesta con el código HTTP correspondiente.

// En un bloque catch el error llega como `unknown`; lo normalizamos a `Error`
// antes de delegarlo al manejador global de errores.
const toError = (error: unknown): Error => {
    if (error instanceof Error) {
        return error;
    }
    return new Error(String(error));
};

export class ProductRouter {
    private readonly router: Router;

    constructor(private readonly productService: ProductService) {
        this.router = Router();
        this.registerRoutes();
    }

    getRouter(): Router {
        return this.router;
    }

    private registerRoutes(): void {
        this.router.post('/', async (req: Request, res: Response) => {
            try {
                const productData = validateProductCreate(req.body);
                const product = await this.productService.createProduct(productData);
                res.status(201).json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
            try {
                const product = await this.productService.getProduct(req.params.id);
                res.json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.put('/:id', async (req: Request, res: Response) => {
            try {
                const productData = validateProductUpdate(req.body);
                const product = await this.productService.updateProduct(req.params.id, productData);
                res.json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.delete('/:id', async (req: Request, res: Response) => {
            try {
                await this.productService.deleteProduct(req.params.id);
                res.status(204).send();
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.get('/', async (_req: Request, res: Response) => {
            try {
                const products = await this.productService.listProducts();
                res.json(products);
            } catch (error) {
                handleError(toError(error), res);
            }
        });
    }
}

// Instancia por defecto conservada para compatibilidad con importaciones previas.
const defaultProductRouter = new ProductRouter(
    new ProductService(new ProductRepository(dynamoDBClient))
);

const router = defaultProductRouter.getRouter();

export default router;