"use client";
import { ProductCard } from "@/components/products/product-card.tsx/ProductCard";
import { logoFont } from "@/config/fonts";
import { ProductType } from "@/data/products.data";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

interface Props {
  products: ProductType[];
  title: string;
}
export const CarouselProducts = ({ products, title }: Props) => {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseIn: true,
      stopOnFocusIn: true,
    })
  );
  return (
    <section
      id="Otros Productos"
      className="px-6 pb-8 pt-2 md:px-14 mx-auto max-w-[1200px]  "
    >
      <h2 className={`${logoFont.className} text-2xl md:text-3xl`}>{title}</h2>
      <div className="md:gradient-mask-r-90 pb-4">
        <Carousel
          plugins={[plugin.current]}
          className=" mx-auto pt-4 md:w-full"
        >
          <CarouselContent className="">
            {products.map((p) => (
              <CarouselItem className="md:basis-1/4 md:pl-8" key={p.id}>
                <ProductCard product={p} key={p.id} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};
