import { fetchProducts } from "@/app/(payload)/utilities/payloadQueries";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { MainHero } from "@/components/ui/hero/MainHero";

export default async function Home() {
  const products = await fetchProducts();
  // console.log(docs);
  return (
    <main>
      <div className="mx-auto px-6 sm:px-14 max-w-[1200px] pt-4 grid gap-8 ">
        <MainHero />
        <ProductGrid products={products} />
      </div>
    </main>
  );
}

export const revalidate = 60;
