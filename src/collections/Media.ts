import { CollectionConfig } from 'payload/types';
import axios from 'axios';

const Media: CollectionConfig = {
  slug: 'media',

  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },

  fields: [
      {
        name: 'Name',
        type: 'text',
      },
  ],
};

export default Media;
