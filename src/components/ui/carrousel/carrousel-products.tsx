"use client";
import { ProductCard } from "@/components/products/product-card.tsx/ProductCard";
import { logoFont } from "@/config/fonts";
import { ProductType } from "@/data/products.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  products: ProductType[];
}
export const CarouselProducts = ({ products }: Props) => {
  return (
    <section
      id="Otros Productos"
      className="px-6 pb-8 pt-2 md:px-12 mx-auto max-w-[1200px]  "
    >
      <h2 className={`${logoFont.className} text-2xl md:text-3xl`}>
        Te puede interesar
      </h2>
      <div className="md:gradient-mask-r-90 pb-4">
        <Carousel className=" mx-auto pt-4 md:w-full">
          <CarouselContent className="">
            {products.map((p) => (
              <CarouselItem className="pl-4 md:basis-1/4 md:pl-8" key={p.id}>
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
