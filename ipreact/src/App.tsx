import {  useEffect, useState, useRef } from 'react'
import { useIpData } from './hooks/useIpData';
import './App.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Map from './components/Map';


function App() {
  const [ip, setIp] =useState("");
  const {data, loading,error, search} =useIpData();

  const hasRef = useRef(false);

  useEffect(()=>{
   
    if(hasRef.current) return;
    hasRef.current = true;
    search();
  },[]);


function handleSubmit(ipValue:string){
  console.log("submitted ip - works", ipValue);
  search(ipValue);
}

  return (
    <div>
      <h1>IP Address</h1>
      <SearchBar
      ip={ip}
      setIp={setIp}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
      <SearchResults data={data}/>
      <main>
      <Map data={data}/> 
      </main>
     
    </div>
  ) 
}
export default App;
