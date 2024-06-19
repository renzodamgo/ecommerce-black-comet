import { fetchProducts } from "@/app/(payload)/utilities/payloadQueries";
import { Cart } from "@/components/cart/cart";
import { CarouselProducts } from "@/components/ui/carrousel/carrousel-products";
export default async function CartPage() {
  const products = await fetchProducts();
  return (
    <section id="Carrito de compras">
      <div className="max-w-[1200px] mx-auto px-6 py-4 md:pb-14">
        <Cart />
      </div>
      <CarouselProducts products={products} title="Te puede interesar " />
    </section>
  );
}

const revalidate = 260;
