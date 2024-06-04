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

const CartPage = () => {
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
            <TableCaption>
              Los costos del delivery en el siguiente paso.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead className="text-right">Precio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">
                    <Link className="hover:underline" href="/">
                      {d.name} ({d.height}mm)
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center">
                      <Minus size={25} className="mr-2 py-1 " />
                      <span className="text-base">1</span>
                      <Plus size={25} className="ml-2 py-1 " />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    S/{d.price.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">S/230.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <Button variant={"outline"} className="mt-4 w-full uppe">
            <ShoppingBag className="mr-2" /> Seguir comprando
          </Button>
          <Button className="mt-4 w-full uppe">
            <CheckCircle2Icon className="mr-2" /> Proceder al pago
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
