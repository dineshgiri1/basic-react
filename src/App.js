import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// THIS THE EXAMPLE FOR USE STATE(HOOK)
function App() {
 const [name , setName] = useState(" ");
  setName = ("din din time to go hommmmee");
  //const [count, setCount] = useState(7);
  const [clickedButton, setClickedButton] = useState(false);
  const[surprise ,setSurpise ] = useState(10)
  return (
    <div>
      {clickedButton ? <p>Button is ON</p>: <p>Button is OFF</p>}
      <button onClick={() => setClickedButton(!clickedButton)}>
        Click me
      </button>
      {surprise ? <p> Your are fined</p>:<p>You are FUCKED</p>}
      <button onClick ={()=> setSurpise(!clickedButton)}>
       click me for surprise </button>
      

      
    </div>
  );
}
export default App;
