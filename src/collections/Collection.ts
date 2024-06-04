import { CollectionConfig } from "payload/types";

export const Collections: CollectionConfig = {
  slug: "collections",
  labels: {
    singular: "Collection",
    plural: "Collections",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
  ],
};
