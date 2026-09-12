import { MOCK_PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id}>
            <li>
              <ol>{product.name} - {product.brand}</ol>
            </li>
          </div>
        ))}
    </div>
  );
}
