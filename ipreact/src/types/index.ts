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
    timezone: string;
 }
//search bar
export type SearchBarProps = {
    ip: string;
    setIp: (value:string) => void;
    onSubmit: (ip:string)=> void;
    loading: boolean;
    error:string | null;
}

//search results
export type SearchResultsProps ={
    data: IpData | null;
};

//map
export type MapProps = {
    data: IpData | null;
}