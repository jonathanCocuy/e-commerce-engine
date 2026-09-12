export interface Product {
    id: number,
    name: string,
    brand: string,
    price: number,
    category: string,
    rating: number[],
    tags: string[],
    inStock: number
}

export interface FilterOptions {
    category?: string, //
    maxPrice?: number,
    minPrice?: number,
    tag?: string, //
    onlyInStock?: number; //
    brand?: string //
} 