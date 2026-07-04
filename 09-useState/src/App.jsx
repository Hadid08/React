import { useState } from 'react'
import './App.css';

const App = () => {
  // const [count, setcount] = useState(0);
  // let onIncrease = () => {
  //   setcount(count+1);
  // }
  // let onDecrease = () => {
  //   setcount(count-1);
  // }

  let [array, setArray] = useState({name: 'Hadid', age: 22, occupation: 'Student'});

  let click = () => {
    setArray(prev => ({...prev, name: "Hadia", age: 19, occupation: 'Student'}))
  } 
      
  return (
    <div>
      <h1>{array.name}, {array.age}, {array.occupation}</h1>
      <button onClick={click}>Click</button>
      {/* <h1>{count}</h1>
      <button className='button1' onClick={onIncrease}>Increase</button>
      <button className='button2' onClick={onDecrease}>Decrease</button> */}
    </div>
  )
}

export default App
