import type { IpData } from "../types"

const API_KEY ="at_Dw02MjcDxw7tH0ttIuN7b1nlHrV1J";
//I know I shouldnt do this but I cant find a way to hide this rn

//fetch using async function 
export async function getIpInfo(ip?:string): Promise<IpData>{
   const baseUrl =`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
    const url = ip && ip.trim() ? `${baseUrl}&ipAddress=${ip.trim()}`: baseUrl;
    
    const res = await fetch(url);

     // check response and throw an error 
     if (!res.ok) {
        throw new Error ('Could not get api data');
     }
     
     //convert to JSON and return 
     const data = await res.json();
     return data;
}