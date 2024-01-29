import type { CollectionConfig } from 'payload/types';
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical';

const Blog: CollectionConfig = {
  slug: 'Blog',
  access: {
    read: ({ req }) => true,
  },
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('Blog_content', { name: 'Blog_content_html' }),
    {
      name: 'Blog_content_output',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterRead: [
      async ({ doc, req }) => {
        const htmlContentField = 'Blog_content_html'; 
        const htmlContent = doc[htmlContentField]; 

        doc.Blog_content_output = htmlContent || 'test'; 

        return doc;
      },
    ],
  },
};

export default Blog;
