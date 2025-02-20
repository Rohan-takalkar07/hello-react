import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
const[num,setNum]=useState("");
function evenOdd(){
if(num%2==0){
  setNum(num+"is even")
}
else{
setNum(num+"is odd")
}
}

  return (
    <div>
      <h1>{num}</h1>
      <input type="number" onChange={(e)=>{setNum(e.target.value)}}/>
      <button onClick={evenOdd}>check</button>

    </div>
  );
}

export default App;
