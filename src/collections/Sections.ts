import { CollectionConfig } from 'payload/types'

const Sections: CollectionConfig = {
  slug: 'sections',


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
