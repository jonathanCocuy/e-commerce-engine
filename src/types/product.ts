export interface Product {
    id: number,
    name: string,
    brand: string,
    price: number,
    category: string,
    rating: number[],
    tags: string[],
    inStock: number
    createdAt: string;
}

export type SortOptions = 'asc' | 'desc' | 'newest';
export interface FilterOptions {
    category?: string, //
    maxPrice?: number,
    minPrice?: number,
    tag?: string, //
    onlyInStock?: number; //
    brand?: string //
    sortBy?: SortOptions
} 

