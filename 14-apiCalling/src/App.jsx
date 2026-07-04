import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const data = await response.json();
  //   console.log(data);

  const [data, setData] = useState([])

  const getData = async () => { 
    let response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem, idx) {
        return <h1 key={idx}>Hello, {elem.author} {idx}</h1>;
      })}
    </div>
  )
}

export default App
