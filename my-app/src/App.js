
import './App.css';
import { useState } from 'react';
import Array from './Array';
function App() {
  const [name,setName]=useState({
    firstName:"",
    secondName:""
  })
  return (
    <div className="App">
   <input type='text' value={name.firstName} onChange={(e)=>{
    setName({...name,firstName: e.target.value})
   }}/>
   <input type='text' value={name.secondName} onChange={(e)=>{
    setName({...name,secondName: e.target.value})
   }}/>

   <h1>My First Name is:{name.firstName}</h1>
   
   <h1>My Second Name is:{name.secondName}</h1>

   <Array />
    </div>
  );
}

export default App;
