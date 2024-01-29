"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var plugin_cloud_1 = require("@payloadcms/plugin-cloud");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var config_1 = require("payload/config");
var Users_1 = __importDefault(require("./collections/Users"));
var Sponsors_1 = __importDefault(require("./collections/Sponsors"));
var Players_1 = __importDefault(require("./collections/Players"));
var Blog_1 = __importDefault(require("./collections/Blog"));
var Media_1 = __importDefault(require("./collections/Media"));
var Sections_1 = __importDefault(require("./collections/Sections"));
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
// import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var generateFileUrl_1 = require("./adapters/generateFileUrl");
var Carousel_1 = __importDefault(require("./collections/Carousel"));
var adapter = (0, s3_1.s3Adapter)({
    config: {
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
        },
        endpoint: "https://aa825ba64ba0c1b5cb89407d580ad294.r2.cloudflarestorage.com",
        region: process.env.R2_REGION
    },
    bucket: process.env.R2_BUCKET_NAME,
});
var uploadOptions, bucket, endpoint;
console.log(process.env.R2_ENDPOINT);
if (process.env.R2_ENDPOINT != "") {
    endpoint = process.env.R2_ENDPOINT;
}
if (process.env.PAYLOAD_PUBLIC_CLOUD_STORAGE_ADAPTER === 's3') {
    uploadOptions = {
        useTempFiles: true,
    };
}
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
    },
    editor: (0, richtext_lexical_1.lexicalEditor)({}),
    cors: "*",
    collections: [Users_1.default, Blog_1.default, Media_1.default, Sections_1.default, Players_1.default, Sponsors_1.default, Carousel_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [(0, plugin_cloud_1.payloadCloud)(), (0, plugin_cloud_storage_1.cloudStorage)({
            enabled: process.env.MY_CONDITION === 'true',
            collections: {
                'media': {
                    disablePayloadAccessControl: true,
                    disableLocalStorage: true,
                    generateFileURL: (0, generateFileUrl_1.getGenerateURL)(process.env.R2_ENDPOINT),
                    adapter: adapter,
                },
            },
        }),],
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
});
