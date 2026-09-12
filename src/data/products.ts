import { Product } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Monitor",
        brand: "LG",
        price: 340,
        category: "Technology",
        inStock: 15,
        rating: [3, 2, 3, 5, 2, 1, 4, 4],
        tags: ["Monitor", "LG"]
    },
    {
        id: 2,
        name: "Keyboard",
        brand: "Ractus",
        price: 85,
        category: "Technology",
        inStock: 24,
        rating: [5, 4, 4, 3, 5, 4, 3, 5],
        tags: ["Keyboard", "Samsung"]
    },
    {
        id: 3,
        name: "Headphones",
        brand: "Sony",
        price: 180,
        category: "Technology",
        inStock: 10,
        rating: [4, 5, 5, 4, 3, 5, 4, 4],
        tags: ["Headphones", "Sony"]
    },
    {
        id: 4,
        name: "Mouse",
        brand: "Logitech",
        price: 65,
        category: "Technology",
        inStock: 32,
        rating: [4, 3, 5, 4, 4, 5, 3, 4],
        tags: ["Mouse", "Logitech"]
    },
    {
        id: 5,
        name: "Webcam",
        brand: "Apple",
        price: 220,
        category: "Technology",
        inStock: 8,
        rating: [5, 4, 5, 5, 4, 3, 5, 4],
        tags: ["Webcam", "Apple"]
    }
]