import { ProductType } from "@/interfaces/products.type";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { ProductCard } from "../product-card.tsx/ProductCard";

export const ProductGrid = async () => {
  const payload = await getPayloadHMR({ config: configPromise });

  const data = await payload.find({
    collection: "products",
    depth: 1,
  });
  // console.log(data.docs);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 pb-8 md:pb-12">
      {data.docs.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
      {/* {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))} */}
    </div>
  );
};
