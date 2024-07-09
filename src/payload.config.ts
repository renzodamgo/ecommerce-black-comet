import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
// import sharp from 'sharp'
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Products } from "./collections/Products";
import { Media } from "./collections/Media";
import { Collections } from "./collections/Collection";
import s3Upload from "payload-s3-upload";
import { S3Client } from "@aws-sdk/client-s3";
import { buildConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Products, Media, Collections],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  plugins: [
    s3Upload(
      new S3Client({
        region: process.env.AWS_REGION || "",
        credentials: {
          accessKeyId: process.env.AWS_KEY || "",
          secretAccessKey: process.env.AWS_SECRET || "",
        },
      })
    ),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
