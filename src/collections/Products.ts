import { CollectionConfig, FieldHook } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
const formatSlug: FieldHook = async ({ value, data }) => {
  // return formatted version of title if exists, else return unmodified value
  return data?.name?.replace(/ /g, "-").toLowerCase() ?? value;
};
export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Product",
    plural: "Products",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      unique: true,
      hooks: {
        beforeChange: [formatSlug],
      },
      admin: {
        readOnly: true,
      },
    },
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "image_2",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "image_3",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "video",
      type: "upload",
      relationTo: "media",
      required: false,
    },

    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),

      required: true,
    },
    {
      name: "collectionName", // Changed to relation field
      type: "relationship",
      relationTo: "collections",
      required: true,
    },
    {
      name: "height",
      type: "number",
      required: true,
    },
    {
      name: "width",
      label: "Width",
      type: "number",
      required: true,
    },
    {
      name: "scale",
      label: "Scale",
      type: "number",
      required: true,
    },
    lexicalHTML("description", { name: "description_html" }),
  ],
};
