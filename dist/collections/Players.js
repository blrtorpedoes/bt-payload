"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Players = {
    slug: 'Players',
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
            name: 'Position',
            type: 'array',
            label: 'Positions Secured',
            minRows: 1,
            maxRows: 10,
            interfaceName: 'CardSlider',
            labels: {
                singular: 'Position',
                plural: 'Positions',
            },
            fields: [
                {
                    name: 'Position',
                    type: 'text',
                },
            ],
        },
        {
            name: 'Nationality',
            type: 'text',
        },
    ],
};
exports.default = Players;
