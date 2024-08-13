import type { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const AcademyBlog: CollectionConfig = {
  slug: "AcademyBlog",
  access: {
    read: ({ req }) => true,
  },
  fields: [
    {
      name: "Cover_Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
    },
    {
      name: "Title",
      type: "text",
    },
    {
      name: "Secondary_Text",
      type: "text",
    },
    {
      name: "Tag",
      type: "text",
    },
    {
      name: "AcademyBlog_content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("AcademyBlog_content", { name: "AcademyBlog_content_html" }),
    {
      name: "AcademyBlog_content_output",
      type: "textarea",
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterRead: [
      async ({ doc, req }) => {
        const htmlContentField = "AcademyBlog_content_html";
        const htmlContent = doc[htmlContentField];

        doc.AcademyBlog_content_output = htmlContent || "test";

        return doc;
      },
    ],
  },
};

export default AcademyBlog;
