import { FilterOptions, Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/products";

export const getFilteredProducts = (filters: FilterOptions) => {

    return MOCK_PRODUCTS.filter((product: Product) => {
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

        

        return MOCK_PRODUCTS;
    })

}