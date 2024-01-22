import { CollectionConfig } from 'payload/types';
import axios from 'axios';

const Media: CollectionConfig = {
  slug: 'media',
  access:{
      read:({req})=>true
  },
  upload: {
    imageSizes: [
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
  },

  fields: [
      {
        name: 'Name',
        type: 'text',
      },
  ],
};

export default Media;
