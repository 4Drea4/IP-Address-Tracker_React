import { useEffect, useState } from 'react'
import { getIpInfo } from './api/ip';
import './App.css'

function App() {
 useEffect(() => {
  async function testApi(){
    try{
      const result = await getIpInfo("8.8.8.8");
      console.log("Api", result);
    }
    catch (err) {
      console.error("Api test", err)
    }
  }
  testApi();
}, []);
  
  return (
    <div>
      <h1>Ip Tracker</h1>
    </div>
  ) 
}
export default App;
