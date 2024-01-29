"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sponsors = void 0;
exports.Sponsors = {
    slug: 'sponsors',
    access: {
        read: function (_a) {
            var req = _a.req;
            return true;
        }
    },
    fields: [
        {
            name: 'Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'Sponsor_Name',
            type: 'text',
        },
        {
            name: 'Sponsor_Type',
            type: 'text',
        },
        {
            name: 'Sponsor_Tag',
            type: 'text',
        },
    ],
};
exports.default = exports.Sponsors;
