import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from './Context/ThemeContext'


const Button = () => {
  
  const [theme, setTheme] = useContext(ThemeDataContext)

  let changeTheme = () => {
    setTheme("dark")
  }

  return (
    <div>
      <button onClick={changeTheme}>Click Me!</button>
    </div>
  )
}

export default Button
