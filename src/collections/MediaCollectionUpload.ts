import { CollectionConfig } from 'payload/types';

const MediaCollectionUpload: CollectionConfig = {
  slug: 'mediaCollectionUpload',
  access:{
      read:({req})=>true
  },
  upload: true,

  fields: [
      {
        name: 'Title',
        type: 'text',
      },
  ],
};

export default MediaCollectionUpload
