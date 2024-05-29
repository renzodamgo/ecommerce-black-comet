import { productsData } from "@/data/products.data";

interface Props {
  params: {
    slug: string;
  };
}
export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const productData = productsData.find(
    (product) => product.id === Number(slug)
  );
  return (
    <div>
      <h1>{productData?.name}</h1>
    </div>
  );
}
