"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CheckCircle2Icon,
  Minus,
  Plus,
  ShoppingBag,
  Slash,
  SparklesIcon,
  Stars,
} from "lucide-react";
import { logoFont } from "@/config/fonts";
import { CarouselProducts } from "@/components/ui/carrousel/carrousel-products";
import { productsData } from "@/data/products.data";

export default function About() {
  return (
    <div>
      <section id="Nosotros">
        <div className="max-w-[1200px] mx-auto px-6 py-4 md:px-14">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Nosotros</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1
            className={`${logoFont.className} text-3xl pt-4 md:text-4xl md:pt-6 md:hidden`}
          >
            Nosotros
          </h1>
          <div className="pt-2 grid gap-2 text-muted-foreground md:grid-cols-2 md:gap-14 md:items-center md:pt-10 md:pb-10 ">
            <div className="h-[300px] w-full bg-slate-500 rounded-xl my-2 md:order-2 shadow-slate-900 shadow-2xl"></div>
            <div className="flex flex-col gap-2">
              <h1
                className={`${logoFont.className} text-3xl pt-2 md:text-4xl md:pt-6 text-primary hidden md:block pb-4`}
              >
                Nosotros
              </h1>
              <p>
                Somos una tienda en línea que se dedica a la venta de productos
                de calidad, con el objetivo de satisfacer las necesidades de
                nuestros clientes.
              </p>
              <p>
                Nuestro compromiso es brindar un excelente servicio al cliente y
                ofrecer productos de calidad a precios accesibles.
              </p>
              <div className="flex items-center gap-4 font-bold pt-4 pb-10">
                <p>- El equipo de Black Comet.</p>
                <Stars size={24} />
              </div>
            </div>
          </div>
        </div>
        <CarouselProducts
          products={productsData.slice(0, 6)}
          title="Te puede interesar "
        />
      </section>
    </div>
  );
}
