import { ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { ValidationError } from './errors.util';

/**
 * Valida los datos para crear un producto
 * @param productData Datos del producto
 * @returns Datos validados
 * @throws ValidationError si los datos no son válidos
 */
export function validateProductCreate(productData: any): ProductCreateDTO {
    if (!productData.name || typeof productData.name !== 'string' || productData.name.trim() === '') {
        throw new ValidationError('El nombre del producto es obligatorio');
    }
    if (!productData.description || typeof productData.description !== 'string') {
        throw new ValidationError('La descripción del producto es obligatoria');
    }
    if (typeof productData.price !== 'number' || productData.price <= 0) {
        throw new ValidationError('El precio debe ser un número positivo');
    }
    if (typeof productData.stock !== 'number' || productData.stock < 0) {
        throw new ValidationError('El stock debe ser un número no negativo');
    }
    return productData;
}

/**
 * Valida los datos para actualizar un producto
 * @param productData Datos del producto
 * @returns Datos validados
 * @throws ValidationError si los datos no son válidos
 */
export function validateProductUpdate(productData: any): ProductUpdateDTO {
    if (productData.name !== undefined && (typeof productData.name !== 'string' || productData.name.trim() === '')) {
        throw new ValidationError('El nombre del producto debe ser una cadena no vacía');
    }
    if (productData.description !== undefined && typeof productData.description !== 'string') {
        throw new ValidationError('La descripción del producto debe ser una cadena');
    }
    if (productData.price !== undefined && (typeof productData.price !== 'number' || productData.price <= 0)) {
        throw new ValidationError('El precio debe ser un número positivo');
    }
    if (productData.stock !== undefined && (typeof productData.stock !== 'number' || productData.stock < 0)) {
        throw new ValidationError('El stock debe ser un número no negativo');
    }
    return productData;
}