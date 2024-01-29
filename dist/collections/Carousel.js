"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carousel = {
    slug: 'Carousel',
    access: {
        read: function () { return true; }
    },
    fields: [
        {
            name: "Cover",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "Title",
            type: "text"
        },
        {
            name: "Link",
            type: "relationship",
            relationTo: "Blog"
        },
        {
            name: 'Description',
            type: 'textarea',
        }
    ]
};
exports.default = Carousel;
