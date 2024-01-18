import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

const adapter = s3Adapter({
    config: {
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
      },
      region: process.env.R2_REGION,
      endpoint: process.env.R2_ENDPOINT,
    },
    bucket: process.env.R2_BUCKET_NAME,
  })

export { s3Adapter }
