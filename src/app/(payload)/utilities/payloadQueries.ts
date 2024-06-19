import { Product } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export const fetchProducts = async () => {
  const payload = await getPayloadHMR({ config: configPromise });

  const data = await payload.find({
    collection: "products",
    pagination: false,
  });
  return data.docs as Product[];
};
