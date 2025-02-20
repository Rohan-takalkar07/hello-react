import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("Hello world");
  function changename(){
    setName("good morning");
  
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changename}>changename</button>
      
    </div>
  );
}

export default App;
