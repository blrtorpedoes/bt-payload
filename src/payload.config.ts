import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
// import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

import { buildConfig } from "payload/config";
import { getGenerateURL } from "./adapters/generateFileUrl";

import Users from "./collections/Users";
import Sponsors from "./collections/Sponsors";
import Players from "./collections/Players";
import Blog from "./collections/Blog";
import AcademyBlog from "./collections/AcademyBlog";

import Media from "./collections/Media";
import Sections from "./collections/Sections";

import Carousel from "./collections/Carousel";
import MediaCollectionUpload from "./collections/MediaCollectionUpload";
import MediaCollection from "./collections/MediaCollection";
import { Teams } from "./collections/Teams";
import { Fixtures } from "./collections/Fixtures";

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
    endpoint:
      "https://aa825ba64ba0c1b5cb89407d580ad294.r2.cloudflarestorage.com",
    region: process.env.R2_REGION,
  },
  bucket: process.env.R2_BUCKET_NAME,
});

let uploadOptions, bucket, endpoint;

console.log(process.env.R2_ENDPOINT);

if (process.env.R2_ENDPOINT != "") {
  endpoint = process.env.R2_ENDPOINT;
}

if (process.env.PAYLOAD_PUBLIC_CLOUD_STORAGE_ADAPTER === "s3") {
  uploadOptions = {
    useTempFiles: true,
  };
}
export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  cors: "*",

  collections: [
    Users,
    Blog,
    AcademyBlog,
    Media,
    MediaCollectionUpload,
    Players,
    Sections,
    Sponsors,
    Carousel,
    MediaCollection,
    Teams,
    Fixtures,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    cloudStorage({
      enabled: process.env.MY_CONDITION === "true",
      collections: {
        media: {
          disablePayloadAccessControl: true,
          disableLocalStorage: true,
          generateFileURL: getGenerateURL(process.env.R2_ENDPOINT),
          adapter: adapter,
        },

        mediaCollectionUpload: {
          disablePayloadAccessControl: true,
          disableLocalStorage: true,
          generateFileURL: getGenerateURL(process.env.R2_ENDPOINT),
          adapter: adapter,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
