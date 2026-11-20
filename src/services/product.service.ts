// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ProductRepository } from '../repositories/product.repository';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { ValidationError, NotFoundError } from '../utils/errors.util';

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    /**
     * Crea un nuevo producto
     * @param productData Datos del producto
     * @returns Producto creado
     * TODO(reto): Implementar validación de unicidad del nombre y reglas de negocio
     */
    async createProduct(productData: ProductCreateDTO): Promise<Product> {
      throw new Error('TODO(reto): createProduct');
    }

    /**
     * Obtiene un producto por ID
     * @param id ID del producto
     * @returns Producto encontrado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica para obtener un producto
     */
    async getProduct(id: string): Promise<Product> {
      throw new Error('TODO(reto): getProduct');
    }

    /**
     * Actualiza un producto existente
     * @param id ID del producto
     * @param productData Datos a actualizar
     * @returns Producto actualizado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica de actualización
     */
    async updateProduct(id: string, productData: ProductUpdateDTO): Promise<Product> {
      throw new Error('TODO(reto): updateProduct');
    }

    /**
     * Elimina un producto
     * @param id ID del producto
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica de eliminación
     */
    async deleteProduct(id: string): Promise<void> {
      throw new Error('TODO(reto): deleteProduct');
    }

    /**
     * Lista todos los productos
     * @returns Lista de productos
     * TODO(reto): Implementar la lógica para listar productos
     */
    async listProducts(): Promise<Product[]> {
      throw new Error('TODO(reto): listProducts');
    }
}