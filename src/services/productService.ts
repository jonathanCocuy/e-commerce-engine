import { FilterOptions, Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/products";

export const getFilteredProducts = (filters : FilterOptions) => {
    
    return MOCK_PRODUCTS.filter((product: Product) => {
        if(product.category !== filters.category) {
            return false
        }

        if(filters.tag) {
            return product.tags[0] === filters.tag
        }

        if(filters.brand) {
            return product.brand === filters.brand
        }

        if(filters.onlyInStock) {
            return product.inStock && filters.onlyInStock > 0
        }

        if(filters.onlyInStock) {
            return product.inStock && filters.onlyInStock > 0
        }

        return MOCK_PRODUCTS;
    })

}