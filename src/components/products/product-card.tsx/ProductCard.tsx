import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/ui/cart-buttons/add-to-cart-btn";
import { Media, Product } from "@/payload-types";
import { EyeIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card rounded-2xl border border-white overflow-hidden flex flex-col h-[500px] md:h-[460px] transition duration-300 ease-in-out transform hover:scale-[102%]">
      <div className="flex-grow overflow-hidden h-[400px] bg-black">
        <Link href={`/product/${product.slug}`}>
          <Image
            className="  mx-auto h-full object-cover  object-center rounded-2xl shadow-inner "
            src={(product.image as Media)?.url || ""}
            alt={product.name}
            width={400}
            height={400}
          />
        </Link>
      </div>
      <div className="px-6 pb-6 pt-6 md:px-4 md:py-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center font-semibold pb-2">
          <h2>{product.name}</h2>
          <p>S/{product.price.toFixed(2)}</p>
        </div>
        <p className="text-muted-foreground line-clamp-2 overflow-hidden mb-4 text-sm min-h-10">
          {product.description}
        </p>
        <Link href={`/product/${product.slug}`}>
          <Button className="w-full mt-auto mb-4" variant={"secondary"}>
            <EyeIcon className="mr-2" height={20} width={20} />
            Ver Producto
          </Button>
        </Link>

        <AddToCartButton
          id={product.id}
          name={`${product.name} (${product.height}mm)`}
          price={product.price}
          slug={product.slug || ""}
        />
      </div>
    </div>
  );
};
