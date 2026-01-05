import type { IpData } from "../types"

const API_KEY = import.meta.env.VITE_IPIFY_KEY;


//fetch using async function 
export async function getIpInfo(ip:string): Promise<IpData>{
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    
    const res = await fetch(url);

     // check response and throw an error 
     if (!res.ok) {
        throw new Error ('Could not get api data');
     }
     
     //convert to JSON and return 
     const data = await res.json();
     return data;
}