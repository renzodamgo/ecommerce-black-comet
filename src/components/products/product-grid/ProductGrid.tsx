import { ProductType } from "@/data/products.data";
import Image from "next/image";
import React from "react";
import { ProductCard } from "../product-card.tsx/ProductCard";

type Props = {
  products: ProductType[];
};

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
