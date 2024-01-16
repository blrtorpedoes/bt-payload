import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',

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
      name: 'Image', 
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'MEDIA', 
      type: 'array', 
      label: 'Gallery',
      minRows: 1,
      maxRows: 100,
      interfaceName: 'CardSlider', 
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
            fields: [
              {
                name: 'Name',
                type: 'text',
              },
              {
                name: 'Tag',
                type: 'text',
              },
          
          ],
  },
  ],
}

export default Media
