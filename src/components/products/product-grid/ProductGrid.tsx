import { ProductCard } from "../product-card.tsx/ProductCard";
import { Product } from "@/payload-types";

type Props = {
  products: Product[];
};

export const ProductGrid = async ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 pb-2 md:pb-2">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
