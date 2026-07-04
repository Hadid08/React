import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 px-8 py-4'>
      <h2 className='text-xl font-bold'>Chess</h2>
      <div className='flex gap-8'>
        <Link className="text-xl font-bold" to="/">Home</Link>
        <Link className="text-xl font-bold" to="/about">About</Link>
        <Link className="text-xl font-bold" to="/contact">Contact</Link>
        <Link className="text-xl font-bold" to="/courses">Courses</Link>
        <Link className="text-xl font-bold" to="/product">Product</Link>
      </div>
      </div>
  )
}

export default Navbar
