import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "myField",
      type: "text",
    },
    {
      name: "otherField",
      type: "checkbox",
    },
  ],
};
