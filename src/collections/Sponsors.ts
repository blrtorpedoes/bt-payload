import { CollectionConfig } from 'payload/types'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',



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
