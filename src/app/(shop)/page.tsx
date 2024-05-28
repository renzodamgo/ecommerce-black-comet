import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { productsData } from "@/data/products.data";

const products = productsData;

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-6 sm:px-14 max-w-[1200px]">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
