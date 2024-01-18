import { CollectionConfig } from 'payload/types'


const Players: CollectionConfig = {
  slug: 'Players',

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
      name: 'Position', 
      type: 'array', 
      label: 'Positions Secured',
      minRows: 1,
      maxRows: 10,
      interfaceName: 'CardSlider', 
      labels: {
        singular: 'Position',
        plural: 'Positions',
      },
            fields: [
              {
                name: 'Position',
                type: 'text',
              },
              {
                name: 'Details',
                type: 'text',
              },
          
          ],
  },

  {
    name: 'Nationality', 
    type: 'text',
  },

  ],
}

export default Players
