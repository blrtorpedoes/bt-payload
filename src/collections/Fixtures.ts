import { CollectionConfig } from "payload/types";

export const Fixtures:CollectionConfig= {
    slug:"Fixtures",
    access:{read:()=>true},
    fields:[
        {
            name:"Match_No",
            type:"number",
            unique:true,
            required:true
        },
        {
            name:"Date",
            type:"date",
            required:true,
            admin:{
                date:{
                    pickerAppearance:"dayAndTime",
                }
            }
        },
        {
            name:"Team_1",
            type:"relationship",
            relationTo:"Teams",
            required:true,
        },{
            name:"Team_2",
            type:"relationship",
            relationTo:"Teams",
            required:true
            
        },
        {
            name:"Round_Type",
            type:"text",
            required:true
        },
        {
            name:"Status",
            type:"text",
            required:true
        }
    ]
}