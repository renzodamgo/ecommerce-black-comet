"use client";
import React from "react";
import { Button } from "../button";
import { ShoppingBagIcon } from "lucide-react";
import useCartStore from "@/store/cart.store";

type AddToCartButtonProps = {
  id: number;
  name: string;
  price: number;
};

export const AddToCartButton = ({ id, name, price }: AddToCartButtonProps) => {
  const { addItem } = useCartStore();
  return (
    <Button
      className="w-full mt-auto"
      onClick={() => addItem({ id: id, name: name, price: price, quantity: 1 })}
    >
      <ShoppingBagIcon className="mr-2" height={20} width={20} />
      Agregar al carrito
    </Button>
  );
};
