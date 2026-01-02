export type IpLocation ={
city: string;  
country: string;
timezone: string;
lat: number;
lng: number;
};
 export type IpData ={
    ip: string;
    isp: string;
    location: IpLocation;
 }
//search bar
type SearchBarProps = {
    ip: string;
    setIp: (value:string) => void;
    onSubmit: ()=> void;
    loading: boolean;
    error:string | null;
}