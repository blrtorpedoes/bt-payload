import { CollectionConfig } from 'payload/types'


const Players: CollectionConfig = {
  slug: 'Players',
  access:{
      read:({req})=>true
  },

  admin:{
    useAsTitle: "first_name"
  },
  
  fields: [
    {
      name: 'Image', 
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'first_name',
      type:'text',
      label: 'First Name'

    },
    {
      name: 'last_name',
      type:'text',
      label: 'Last Name'
    },
    {
      name: "number",
      type: "number",
      label : "Number"
    },
    {
      name:'positions',
      type: 'text',
      label : 'Positions'
    },
    {
      name:"height",
      type:"number",
      label: "Height"
    },
      {
    name: 'country_code', 
    type: 'radio',
    label: 'Country Code',
    options: ["IN", "BR", "AU"]
      }

  ],
}

export default Players
