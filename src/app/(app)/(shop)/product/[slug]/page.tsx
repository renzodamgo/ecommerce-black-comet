import { productsData, ProductType } from "@/data/products.data";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Phone, ShoppingCartIcon, Slash } from "lucide-react";
import { logoFont } from "@/config/fonts";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CarouselProducts } from "@/components/ui/carrousel/carrousel-products";
import { AddToCartButton } from "@/components/ui/cart-buttons/add-to-cart-btn";
import { getPayload } from "payload";
import { Collection, Media, Product } from "@/payload-types";

interface Props {
  params: {
    slug: string;
  };
}
export default async function ProductPage({ params }: Props) {
  const payload = await getPayloadHMR({ config: configPromise });

  const { slug } = params;
  const products = await payload.find({
    collection: "products",
  });
  const res = await payload.find({
    collection: "products",
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  const product = res.docs[0];

  const getRandomProducts = (
    productsData: Product[],
    numberOfProducts: number
  ) => {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = productsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [productsData[i], productsData[j]] = [productsData[j], productsData[i]];
    }

    // Return the first 'numberOfProducts' items from the shuffled array
    return productsData.slice(0, numberOfProducts);
  };

  // Usage: Get 4 random products
  const randomProducts = getRandomProducts(
    products.docs.filter((p) => p.id !== product.id),
    6
  );
  if (!product) notFound();
  return (
    <div>
      <section
        id={product.name}
        className="px-6 py-2 mx-auto max-w-[1200px] md:px-14"
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Productos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="pt-2 pb-6 md:pt-6">
          <div className="py-2 md:hidden">
            <h1 className={`${logoFont.className} text-4xl`}>
              {product.name}
              <span className="text-muted-foreground text-2xl">
                {" "}
                ({product.height}mm)
              </span>
            </h1>
            <h2 className="text-muted-foreground">
              {(product.collectionName as Collection).name} COLLECTION
            </h2>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div>
              <div className=" flex justify-center items-center pt-4 h-[400px] overflow-hidden shadow-2xl shadow-slate-950  rounded-2xl md:justify-start md:h-[500px]">
                <Image
                  className="object-cover object-center"
                  src={(product.image as Media).url || ""}
                  alt={product.name}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div>
              <div className="py-2 hidden md:block">
                <h1 className={`${logoFont.className} text-4xl`}>
                  {product.name}
                  <span className="text-muted-foreground text-2xl">
                    {" "}
                    ({product.height}mm)
                  </span>
                </h1>
                <h2 className="text-muted-foreground">
                  {(product.collectionName as Collection).name} COLLECTION
                </h2>
              </div>
              <div className="pt-4 md:pt-2">
                {/* <h3 className={`${logoFont.className} text-xl font-bold`}>
                  Precio
                </h3> */}
                <p className={`${logoFont.className} pt-2 text-3xl`}>
                  S/{product.price.toFixed(2)}
                </p>
                <div className="md:grid grid-cols-2 gap-8">
                  <div className="mt-4">
                    <AddToCartButton
                      id={product.id}
                      name={`${product.name} (${product.height}mm)`}
                      price={product.price}
                      variant="secondary"
                    />
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=51922360504&text=${encodeURI(
                      "Hola! 👋 Me interesa este producto: \n" +
                        product?.name +
                        " - S/." +
                        product?.price.toFixed(2) +
                        "\n" +
                        "https://www.blackcomet3d.com/product/" +
                        product?.slug +
                        "\n" +
                        "Quisiera saber información del envío y disponibilidad. 📦 \nMuchas Gracias!"
                    )}`}
                    target="_blank"
                  >
                    <Button className="mt-4  w-full">
                      <Phone width={24} height={24} className="mr-2" />
                      Comprar Ahora
                    </Button>
                  </a>
                </div>
              </div>
              <Accordion className="md:pt-4" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h3
                      className={`${logoFont.className}  text-lg font-semibold`}
                    >
                      Dimensiones
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-base">
                      Altura: {product?.height} mm
                    </p>
                    <p className="pt-2 text-muted-foreground text-base">
                      Ancho: {product?.height} mm
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h3
                      className={`${logoFont.className}  text-lg font-semibold`}
                    >
                      Descripción
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-muted-foreground">
                      {product?.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* <CarouselProducts products={randomProducts} title="Te puede interesar" /> */}
    </div>
  );
}
