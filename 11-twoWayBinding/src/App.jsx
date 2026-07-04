import {useState} from 'react'
import "./App.css"

const App = () => {

  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", name);
    setName('');
  }

  return (
    <div>
    <form onSubmit={(e) => {
      submitHandler(e);
    }}>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default App
