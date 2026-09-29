import { FilterOptions, Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/products";

export const getFilteredProducts = (filters: FilterOptions) => {

    const filteredProducts = MOCK_PRODUCTS.filter((product: Product) => {
        if (filters.category && product.category !== filters.category) {
            return false
        }

        if (filters.tag && !product.tags.includes(filters.tag)) {
            return false
        }

        if (filters.brand && product.brand !== filters.brand) {
            return false
        }

        if (filters.onlyInStock && !product.inStock) {
            return false
        }

        if ((filters.minPrice !== undefined && product.price < filters.minPrice)) {
                return false
        }

        if ((filters.maxPrice !== undefined && product.price > filters.maxPrice)) {
                return false
        }
        return true;
    });

    
    if (filters.sortBy === "asc") {
        return [...filteredProducts].sort((a, b) => a.price - b.price)
    }

    if (filters.sortBy === "desc") {
        return [...filteredProducts].sort((a, b) => b.price - a.price)
    }

    if (filters.sortBy === "newest") {
        return [...filteredProducts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return filteredProducts;

}