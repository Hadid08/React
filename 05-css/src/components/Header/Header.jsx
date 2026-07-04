import React from 'react'
import google from '../../assets/google.jpg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={google} alt="This is the image of google" className={styles.image}/>
      <ul className={styles.list}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
