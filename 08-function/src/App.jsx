import React from 'react'
import './App.css'

const App = () => {

  const click = (event) => {
    console.log(event.clientX);
  }

  return (
    <div className='container'>
      <div className="button" onMouseMove={click}>Click Me!</div>
    </div>
  )
}

export default App
