import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { MainHero } from "@/components/ui/hero/MainHero";

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-6 sm:px-14 max-w-[1200px] pt-4 grid gap-8 ">
        <MainHero />
        <ProductGrid />
      </div>
    </main>
  );
}
