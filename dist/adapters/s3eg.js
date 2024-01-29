"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapter = void 0;
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var adapter = (0, s3_1.s3Adapter)({
    config: {
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
        },
        endpoint: process.env.R2_ENDPOINT,
        region: process.env.R2_REGION
    },
    bucket: process.env.R2_BUCKET_NAME,
});
exports.adapter = adapter;
