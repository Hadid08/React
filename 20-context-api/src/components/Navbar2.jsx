import { useContext } from "react"
import { ThemeDataContext } from "./Context/ThemeContext"

const Navbar2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div>
      <h4>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>{theme}</li>
      </h4>
    </div>
  )
}

export default Navbar2
