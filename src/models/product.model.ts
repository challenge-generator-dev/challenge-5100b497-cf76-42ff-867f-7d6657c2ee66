export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductCreateDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductUpdateDTO {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
}