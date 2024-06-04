"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { logoFont } from "@/config/fonts";
import { productsData } from "@/data/products.data";
import {
  CheckCircle2Icon,
  Minus,
  Plus,
  ShoppingBag,
  Slash,
  SparklesIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCartStore from "@/store/cart.store";
import { CarouselProducts } from "@/components/ui/carrousel/carrousel-products";

const CartPage = () => {
  const { items, addItem, removeItem, removeOneItem } = useCartStore();
  const whatsappLink = "https://api.whatsapp.com/send/?phone=51922360504&text=";
  const handleCheckoutMessage = () => {
    const itemsMessage = items.map(
      (i) =>
        `${i.name} x ${i.quantity} = S/${(i.price * i.quantity).toFixed(2)}`
    );
    const total = items
      .map((i) => i.price * i.quantity)
      .reduce((a, b) => a + b, 0);
    const message = `Hola! 👋 Me interesan los siguientes productos:\n${itemsMessage.join(
      "\n"
    )} \nTotal: S/${total} \n\nQuisiera saber información del envío y disponibilidad. 📦 \nMuchas Gracias!`;
    return `${whatsappLink}${encodeURIComponent(message)}`;
  };

  const data = productsData.slice(0, 4);
  return (
    <section id="Carrito de compras">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage>Carrito de compras</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="py-4">
          <h1 className={`${logoFont.className} text-2xl`}>
            Carrito de compras
          </h1>
          <Table className="border rounded-lg mt-4">
            {items.length !== 0 && (
              <TableCaption>
                Los costos del delivery en el siguiente paso.
              </TableCaption>
            )}
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead className="text-right">Precio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    <div className="mx-auto flex justify-center items-center gap-2 text-muted-foreground h-[200px]">
                      <SparklesIcon></SparklesIcon> No hay productos en el
                      carrito
                    </div>
                  </TableCell>
                </TableRow>
              )}
              {items.length !== 0 &&
                items.map((i) => (
                  <TableRow key={i.id}>
                    <TableCell className="font-medium">
                      <Link
                        className="hover:underline"
                        href={`/product/${i.slug}`}
                      >
                        {i.name}
                      </Link>
                    </TableCell>
                    <TableCell className="md:w-[100px]">
                      <div className="flex justify-start items-center ">
                        <button
                          onClick={() => {
                            removeOneItem(i.id);
                          }}
                        >
                          <Minus size={25} className="mr-2 py-1 " />
                        </button>
                        <span className="text-base">{i.quantity}</span>
                        <button
                          onClick={() =>
                            addItem({
                              id: i.id,
                              name: i.name,
                              price: i.price,
                              quantity: 1,
                              slug: i.slug,
                            })
                          }
                        >
                          <Plus size={25} className="ml-2 py-1 " />
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right md:w-[100px]">
                      S/{(i.price * i.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            {items.length !== 0 && (
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">
                    S/
                    {items
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
          <div className="md:flex flex-col justify-end items-end ">
            <Link href="/products">
              <Button variant={"outline"} className="mt-4 w-full md:w-60">
                <ShoppingBag className="mr-2" /> Seguir comprando
              </Button>
            </Link>
            {items.length !== 0 && (
              <a href={handleCheckoutMessage()} target="_blank">
                <Button className="mt-4 w-full md:w-60">
                  <CheckCircle2Icon className="mr-2" /> Proceder al pago
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <CarouselProducts products={data} title="Te puede interesar " /> */}
    </section>
  );
};

export default CartPage;
