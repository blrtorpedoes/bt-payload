import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Sponsors from './collections/Sponsors'
import Players from './collections/Players'
import Blog from './collections/Blog'
import Media from './collections/Media'
import Sections from './collections/Sections'


import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
// import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

import type { Adapter } from '../src/types'
import { adapter } from './adapters/s3eg'



let uploadOptions


if (process.env.PAYLOAD_PUBLIC_CLOUD_STORAGE_ADAPTER === 's3') {
  uploadOptions = {
    useTempFiles: true,
  }

}

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users,Blog,Media,Sections,Players,Sponsors],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud(),cloudStorage({
    enabled: process.env.MY_CONDITION === 'true',
    collections: {
      'media': {
        disablePayloadAccessControl : true,
        adapter: adapter, // see docs for the adapter you want to use
      },
    },
  }),],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  
})
