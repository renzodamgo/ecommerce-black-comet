import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  labels: {
    singular: "Media",
    plural: "Media",
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  fields: [],
};
