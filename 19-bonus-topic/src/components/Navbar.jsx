import React from 'react'

const Navbar = ({theme, setTheme}) => {
  return (
    <div>
      <button onClick={()=>{setTheme('Dark')}}>Change Theme</button>
    </div>
  )
}

export default Navbar
