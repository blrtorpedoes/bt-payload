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
            name:"round_type",
            type:"text",
            required:true,
            label:"Round Type",
            defaultValue:"League"
        },
        {
            name:"status",
            type:"radio",
            options:["Upcoming","Played","Cancelled","Rescheduled"],
            defaultValue:"Upcoming",
            required:true,
            label:"Status"

        },{
            name:"score",
            type:"text",
            label: "Score",
              admin:{
                condition:(data,siblingData,{user})=>{
                    if(data.status === "Played") return true
                    return false
                }
            }

        },{
            name:"Winner",
            type:"radio",
            options:["Team_1","Team_2"],
            admin:{
                condition:(data,siblingData,{user})=>{
                    if(data.status === "Played") return true

                    return false
                }
            }
        }
    ]
}