import { useState } from 'react';



function App() {
   const [counter , setCounter]= useState(15)
 // let counter = 15

  const addValue = () => {
    console.log("button clicked! Current counter value: ",counter);
   // counter= counter + 1;  or you can do this way as well as useState counter updaate counter = counter + 1; // setCounter(counter)
   setCounter(counter + 1);// you can do this way as well as useState counter updaate
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
  
    <>
  
    <h1>iqra and react</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value </button><br/ >
    <button onClick= {removeValue}> Remove Value</button>
    <p> Footer the Result is : {counter}</p>
    </>
  )
}

export default App;
