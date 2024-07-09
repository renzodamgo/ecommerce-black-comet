import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Slash } from "lucide-react";
import { logoFont } from "@/config/fonts";
import {
  fetchProducts,
  getTotalPages,
} from "@/app/(payload)/utilities/payloadQueries";

interface Props {
  params: {
    page: string;
  };
}

export default async function ProductsPage({ params }: Props) {
  const page = params.page;
  const products = await fetchProducts(12, Number(page));
  const totalPages = await getTotalPages(12);
  // console.log(totalPages);
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
        <div className="mx-auto pt-2 pb-4">
          <Pagination>
            <PaginationContent>
              {Number(page) > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`/products/${Number(page) - 1}`} />
                </PaginationItem>
              )}
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`/products/${index + 1}`}
                    isActive={Number(page) == index + 1 ? true : false}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem> */}
              {Number(page) < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`/products/${Number(page) + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
        <ProductGrid products={products} />
        <div className="mx-auto pt-2 pb-4">
          <Pagination>
            <PaginationContent>
              {Number(page) > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`/products/${Number(page) - 1}`} />
                </PaginationItem>
              )}
              <PaginationItem></PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`/products/${index + 1}`}
                    isActive={Number(page) == index + 1 ? true : false}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem> */}
              {Number(page) < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`/products/${Number(page) + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const totalPages = await getTotalPages();

  const paths = Array(totalPages)
    .fill(0)
    .map((_, page) => ({
      page: `${page + 1}`,
    }));
  return paths;
}

export const revalidate = 260;
