import { fetchProducts } from "@/app/(payload)/utilities/payloadQueries";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Button } from "@/components/ui/button";
import { MainHero } from "@/components/ui/hero/MainHero";
import { Eye, EyeIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const products = await fetchProducts(8);
  // console.log(docs);
  return (
    <main>
      <div className="mx-auto px-6 sm:px-14 max-w-[1200px] pt-4 grid gap-8 ">
        <MainHero />
        <ProductGrid products={products} />
        <div className="mx-auto">
          <Link href={`/products`}>
            <Button variant={"outline"} className="mx-auto mb-8">
              <EyeIcon className="mr-2" height={20} width={20} /> Ver más
              productos
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export const revalidate = 260;
