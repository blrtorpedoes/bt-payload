import { CollectionConfig } from 'payload/types'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  access:{
      read:({req})=>true
  },
  fields: [
    {
      name: 'Image', 
      type: 'upload',
      relationTo: 'media',
    },

    {
      name : 'Sponsor_Name',
      type : 'text',
    },
    {
      name : 'Sponsor_Type',
      type : 'text',
    },

    {
      name : 'Sponsor_Tag',
      type : 'text',
    },
    
  ],
}


export default Sponsors
