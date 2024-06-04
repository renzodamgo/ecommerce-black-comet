"use client";
import React from "react";
import { Button } from "../button";
import { ShoppingBagIcon } from "lucide-react";
import useCartStore from "@/store/cart.store";
import { toast } from "sonner";

type AddToCartButtonProps = {
  id: number;
  name: string;
  price: number;
  variant?:
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
};

export const AddToCartButton = ({
  id,
  name,
  price,
  variant = "default",
}: AddToCartButtonProps) => {
  const { addItem } = useCartStore();
  const handleAddItem = () => {
    addItem({ id: id, name: name, price: price, quantity: 1 });
    toast.success(`${name} agregado al carrito`);
  };
  return (
    <Button
      variant={variant}
      className="w-full mt-auto"
      onClick={handleAddItem}
    >
      <ShoppingBagIcon className="mr-2" height={20} width={20} />
      Agregar al carrito
    </Button>
  );
};
