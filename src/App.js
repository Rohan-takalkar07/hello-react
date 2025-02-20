import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  function addcount(){
  
    setCount(count+1)
  }
 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addcount}>addcount</button>
      
    </div>
  );
}

export default App;
