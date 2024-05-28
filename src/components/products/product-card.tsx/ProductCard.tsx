import { ProductType } from "@/data/products.data";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="rounded-sm border border-white">
      <Image src={product.image} alt={product.name} width={400} height={900} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};
