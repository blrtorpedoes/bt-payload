import { CollectionConfig } from "payload/types";

export const Teams: CollectionConfig = {
    slug: "Teams",
    access: {
        read: () => true
    },

    admin:{
            listSearchableFields:["Team_Name"],
            useAsTitle: "Team_Name",
    },

    fields:[
        {
            "name":"Team_Name",
            "type":"text",
            "unique":true,
        },
        {
            "name":"Team_Logo",
            "type":"upload",
            "relationTo":"media"
        },

    ]

}