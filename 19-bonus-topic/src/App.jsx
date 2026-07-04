import Navbar from './components/Navbar'
import { useState } from 'react'
import "./App.css"

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>{theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
