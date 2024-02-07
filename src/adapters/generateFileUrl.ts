
import { CollectionConfig, ImageSize } from "payload/types";


export const getGenerateURL = (mediaDomain:string) => (args: { collection: CollectionConfig; filename: string; prefix?: string | undefined; size?: ImageSize | undefined; })=>{
    let prefixUrl = (args.prefix === undefined || args.prefix === "" )?"": args.prefix+"/" 
    let url = `${mediaDomain}/${prefixUrl}${args.filename}`
    return url
}