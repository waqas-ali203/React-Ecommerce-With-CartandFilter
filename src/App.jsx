import React from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Navbar from './components/Navbar'
import All_Products from './components/All_Products'
import Product_Detail from './pages/Product_Detail'
import ProductByCategory from './pages/ProductByCategory'
import SearchProduct from './pages/SearchProduct'
import Trending_Slider from './components/Trending_Slider'
import Cart from './pages/Cart'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<All_Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/:id' element={<Product_Detail/>}></Route>
        <Route path='/product/category/:cat' element={<ProductByCategory/>}></Route>
        <Route path='/product/search/:term' element={<SearchProduct/>}></Route>
      </Routes>
      <Trending_Slider />
    </Router>
  )
}

export default App
