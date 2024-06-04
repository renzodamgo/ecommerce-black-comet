import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { productsData } from "@/data/products.data";
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
const products = productsData;
export default function ProductsPage() {
  return (
    <div>
      <div className="mx-auto px-6 sm:px-14 max-w-[1200px] pt-4 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage>Productos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1
          className={`${logoFont.className} text-3xl pt-4 pb-4 md:text-4xl md:pt-4 `}
        >
          Nuestro Catálogo
        </h1>
        <ProductGrid  />
      </div>
    </div>
  );
}
