import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

const adapter = s3Adapter({
    config: {
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
      },
      endpoint : process.env.R2_ENDPOINT,
      region: process.env.R2_REGION
    },
    bucket: process.env.R2_BUCKET_NAME,

  })

export { adapter }
