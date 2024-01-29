"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Media = {
    slug: 'media',
    access: {
        read: function (_a) {
            var req = _a.req;
            return true;
        }
    },
    upload: {
        imageSizes: [
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
        ],
    },
    fields: [
        {
            name: 'Name',
            type: 'text',
        },
    ],
};
exports.default = Media;
