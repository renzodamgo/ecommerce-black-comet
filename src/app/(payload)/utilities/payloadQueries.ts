import { Product } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export const fetchProducts = async (limit?: number, page?: number) => {
  const payload = await getPayloadHMR({ config: configPromise });

  const data = await payload.find({
    collection: "products",
    limit: limit || 12,
    page: page || 1,
  });
  return data.docs as Product[];
};

export const getTotalPages = async (limit?: number) => {
  const payload = await getPayloadHMR({ config: configPromise });

  const data = await payload.find({
    collection: "products",
    limit: limit || 12,
  });
  return data.totalPages;
};
