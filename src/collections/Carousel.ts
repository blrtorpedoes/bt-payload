import { Collection, CollectionInfo } from "mongodb";
import { CollectionConfig } from "payload/types";

const Carousel: CollectionConfig = {
    slug: 'Carousel',
    access: {
        read: () => true
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
            type: "text",
        }
        , {
            name: 'Description',
            type: 'textarea',
        }
    ]
}

export default Carousel