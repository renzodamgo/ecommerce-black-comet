import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products.data";
import { ShoppingBagIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card rounded-2xl border border-white overflow-hidden flex flex-col h-[420px]">
      <div className="flex-grow overflow-hidden h-[350px]">
        <Image
          className="object-cover w-full h-full object-top px-4 rounded-2xl shadow-inner"
          src={product.image}
          alt={product.name}
          width={400}
          height={300} // Adjusted for a fixed height aspect
        />
      </div>
      <div className="px-4 py-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center font-semibold pb-3">
          <h2>{product.name}</h2>
          <p>S/{product.price.toFixed(2)}</p>
        </div>
        <Button className="w-full mt-auto ">
          <ShoppingBagIcon className="mr-2 " height={20} width={20} /> Agregar
          al carrito
        </Button>
      </div>
    </div>
  );
};
