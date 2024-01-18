import { CollectionConfig } from 'payload/types'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',

  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
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
      name: 'Profile_Image', 
      type: 'upload',
      relationTo: 'media',
    },

    {
      name : 'Sponsor_Name',
      type : 'text',
    },

    {
      name : 'Image_Tag',
      type : 'text',
    },
    
  ],
}


export default Sponsors
