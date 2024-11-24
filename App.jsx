
import './App.css'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Order from './pages/Order'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/about' element={<About/>}/>
  <Route  path='/cart'element={<Cart/>}/>
  <Route path='/order' element={<Order/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/Placeorder' element={<Placeorder/>}/>
  <Route path='/prodcut/:prodcutid' element={<Product/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App
