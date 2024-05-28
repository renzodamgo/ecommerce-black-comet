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
    <div className="product-card rounded-2xl border border-white overflow-hidden flex flex-col h-[440px]">
      <div className="flex-grow overflow-hidden h-[350px] bg-black">
        <Image
          className="object-cover w-[55%] md:w-[85%] mx-auto h-full object-center md:object-top   rounded-2xl shadow-inner"
          src={product.image}
          alt={product.name}
          width={400}
          height={300} // Adjusted for a fixed height aspect
        />
      </div>
      <div className="px-6 pb-6 pt-6 md:px-4 md:py-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center font-semibold pb-2">
          <h2>{product.name}</h2>
          <p>S/{product.price.toFixed(2)}</p>
        </div>
        <p className=" text-muted-foreground line-clamp-2 overflow-y-hidden mb-4">
          {product.description}
        </p>
        <Button className="w-full mt-auto  ">
          <ShoppingBagIcon className="mr-2 " height={20} width={20} /> Agregar
          al carrito
        </Button>
      </div>
    </div>
  );
};
