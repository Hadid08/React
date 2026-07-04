import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <div className="nav">
      <h3>
        Market Place
      </h3>
      <div className='links'>
        <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Home</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to='/about'>About</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to='/contact'>Contact</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
