import { useState } from "react";
import { getIpInfo } from "../api/ip";
import type { IpData} from "../types";


 export function useIpData(){
    //state for error, data and loading
    const [error, setError] = useState<string | null >(null); 
    const [data, setData] = useState<IpData | null > (null)
    const [loading, setLoading] = useState(false);

    async function search (ip?:string){
       setLoading(true);
       setError(null) //Reset error and make sure I set loading to true

        try{ 
            const result = await getIpInfo(ip); //wait for the info from ip
            setData(result); 
        } catch (err) {
            setError("Uh oh something is broken");
        
        } finally {
            setLoading(false);

        }
    }
    return {
        error, data, loading, search
    };
 }