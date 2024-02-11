import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0); 
  const addValue = ()=>{
    counter = counter + 1;
    if(counter > 20){
      setCounter("Can't Increase");
    }else{
      setCounter(counter);
    }
    
  }
  const reduceValue = ()=>{
    counter = counter -1;
    if(counter < 0){
      setCounter("counter cannot be negative");
    }else{
      setCounter(counter);
    }
    
  }
  return (
    <>
      <h1>Counter Project Using React</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add value</button><br/>
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  );
}

export default App;
