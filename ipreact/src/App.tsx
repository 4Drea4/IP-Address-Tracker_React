import { useEffect, useState } from 'react'
import { useIpData } from './hooks/useIpData';
import './App.css'


function App() {
  const {data, loading,error, search} =useIpData();

 useEffect(() => {
  search("8.8.8.8");
 }, []);

  useEffect(() => {
    console.log("loading", loading);
    console.log("error", error);
    console.log("data",data);
  },[loading,error,data]);


  return (
    <div>
      <h1>Testing custom hooks</h1>
      {loading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null,2)}</pre>}
      <h1>Ip Tracker</h1>
    </div>
  ) 
}
export default App;
