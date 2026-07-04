import './index.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Footer from './components/Footer'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kid from './Pages/Kids'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<CoursesDetail />}/>
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kid' element={<Kid />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
