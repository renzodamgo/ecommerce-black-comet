import { Product } from "@/payload-types";

export const getRandomProducts = (
  productsData: Product[],
  numberOfProducts: number
) => {
  for (let i = productsData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [productsData[i], productsData[j]] = [productsData[j], productsData[i]];
  }

  return productsData.slice(0, numberOfProducts);
};