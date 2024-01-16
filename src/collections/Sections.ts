import { CollectionConfig } from 'payload/types'

const Sections: CollectionConfig = {
  slug: 'sections',

  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },

  fields: [
    {
      name: 'Title', 
      type: 'text',
    },

    {
      name: 'Anchor', 
      type: 'text',
    },
    
    {
      name: 'Image', 
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'Description', 
      type: 'textarea',
    },
    
  
  ],
}

export default Sections
