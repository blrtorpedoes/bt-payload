"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sections = {
    slug: 'sections',
    access: {
        read: function () { return true; }
    },
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
};
exports.default = Sections;
