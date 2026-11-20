// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { NotFoundError } from '../utils/errors.util';

export class ProductRepository {
    private readonly tableName = 'Products';

    constructor(private dynamoDBClient: DynamoDBDocumentClient) {}

    /**
     * Crea un nuevo producto en DynamoDB
     * @param productData Datos del producto
     * @returns Producto creado
     * TODO(reto): Implementar la lógica para crear un producto en DynamoDB
     */
    async create(productData: ProductCreateDTO): Promise<Product> {
      throw new Error('TODO(reto): create');
    }

    /**
     * Obtiene un producto por ID
     * @param id ID del producto
     * @returns Producto encontrado o null si no existe
     * TODO(reto): Implementar GetCommand para obtener el producto
     */
    async findById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar lógica para obtener el producto
        return null;
    }

    /**
     * Actualiza un producto existente
     * @param id ID del producto
     * @param productData Datos a actualizar
     * @returns Producto actualizado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar UpdateCommand para actualizar el producto
     */
    async update(id: string, productData: ProductUpdateDTO): Promise<Product> {
      throw new Error('TODO(reto): update');
    }

    /**
     * Elimina un producto
     * @param id ID del producto
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar DeleteCommand para eliminar el producto
     */
    async delete(id: string): Promise<void> {
        // TODO(reto): Implementar lógica para eliminar el producto
    }

    /**
     * Lista todos los productos
     * @returns Lista de productos
     * TODO(reto): Implementar ScanCommand para listar productos
     */
    async findAll(): Promise<Product[]> {
        // TODO(reto): Implementar lógica para listar productos
        return [];
    }

    /**
     * Genera un ID único para el producto
     * @returns ID generado
     */
    private generateId(): string {
      throw new Error('TODO(reto): generateId');
    }
}