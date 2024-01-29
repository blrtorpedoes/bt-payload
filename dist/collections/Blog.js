"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var Blog = {
    slug: 'Blog',
    access: {
        read: function (_a) {
            var req = _a.req;
            return true;
        }
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
            editor: (0, richtext_lexical_1.lexicalEditor)({})
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
};
exports.default = Blog;
