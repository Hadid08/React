import {useState, useEffect } from "react";


const App = () => {

  // const [data, setData] = useState(0);
  // const [secData, setSecData] = useState(100);

  // useEffect(function(){
  //   console.log("Use Effect is running...");
  // }, [data]);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  
  function changeA() {
        console.log("The value of A is changing...")
      }
      
  function changeB() {
        console.log("The value of B is changing...")
      }

  useEffect(function(){
    changeA()
  }, [a])

  useEffect(function(){
    changeB()
  }, [b])


  return (
    <div>
      <h2>{a}</h2>
      <h2>{b}</h2>

      <button onClick={()=>{
        setA(a + 1);
      }}>Button A</button>
      <button onClick={()=>{
        setB(b + 1);
      }}>Button B</button>

      {/* <h1>data1: {data}</h1>
      <h1>data2: {secData}</h1>

      <button onMouseEnter={() => {
        setData(data+1);
      }}
      onMouseLeave={() => {
        setSecData(secData+1);
      }}>Click Me!</button> */}


    </div>
  )
}

export default App
