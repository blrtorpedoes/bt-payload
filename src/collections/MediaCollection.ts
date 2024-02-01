import { CollectionConfig } from "payload/types";


const MediaCollection :CollectionConfig = {
    slug:"mediaCollection",
    fields:[
        {
            name:"Collection_Title",
            
            type:"text"
        },
        {
            name:"slug",
            type:"text",
            unique:true,
        },
        {
            name:"Images",
            type:"array",
            minRows:1,
            maxRows:100,
            fields:[
                {
                    name:"Image",
                    type:"upload",
                    relationTo:"mediaCollectionUpload"
                }
            ]
        }
    ]

}
export default MediaCollection