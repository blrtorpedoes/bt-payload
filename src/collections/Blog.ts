import { CollectionConfig } from 'payload/types'
import {
  lexicalEditor
} from '@payloadcms/richtext-lexical'

const Blog: CollectionConfig = {
  slug: 'Blog',



  fields: [
    {
      name: 'Cover_Image', 
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Title', 
      type: 'text',
    },
    {
      name: 'Secondary_Text', 
      type: 'text',
    },
    {
      name: 'Tag', 
      type: 'text',
    },
    {
      name: 'Blog_content', 
      type: 'richText',
      editor: lexicalEditor({})
      //   admin: {
      //     elements: [
      //       'h1',
      //       'h2',
      //       'h3',
      //       'h4',
      //       'link',
      //       'blockquote',
      //       'textAlign',
      //       'indent',
      //       'ol',
      //       'ul'
      //     ],
      //     leaves: [
      //       'bold',
      //       'italic',
      //       'code',
      //       'strikethrough',
      //       'underline'
      //     ]
          
      //   }
      // })
    }
  
  ],
}

export default Blog
