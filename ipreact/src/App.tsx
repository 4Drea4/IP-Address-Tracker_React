import {  useState } from 'react'
import { useIpData } from './hooks/useIpData';
import './App.css'
import SearchBar from './components/SearchBar';

function App() {
  const [ip, setIp] =useState("");
  const {data, loading,error, search} =useIpData();

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
      
   
    </div>
  ) 
}
export default App;
