import Navbar2 from './Navbar2'
import "../index.css"
import { useContext } from 'react'
import { ThemeDataContext } from './Context/ThemeContext';

const Navbar = () => {

  const [theme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <h2>Sheryians</h2>
      <Navbar2/>
    </div>
  )
}

export default Navbar
