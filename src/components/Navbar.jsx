import React from 'react'
import { FaAmazon , FaShoppingCart , FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';  
const Navbar = () => {
  return (
   <>
   <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 sticky-top shadow">
    <div className="container-fluid">
      {/* left section logo */}
      <Link to={'/'} className='navbar-brand d-flex align-items-center'>
        <FaAmazon className='text-warning fs-2 me-2' />
        <span className='fs-4 fw-bold'>Amazon</span>
      </Link>

      {/* Search Box */}
      <form className='d-flex mx-auto search-container'>
        <input type="search" className='form-control search-input' placeholder='Search Products' />
        <button className='btn btn-warning search-button'><FaSearch /></button>
      </form>

      {/* Categories */}
      <ul className='navbar-nav mx-auto d-flex gap-3'>
        {["Mobiles","Laptops","Tablets","Watches"].map((category) => (
          <li key={category} className='nav-item'>
            <Link to={`/product/category/${category}`} className="nav-link category-link">{category}</Link>
          </li>
        ))}
      </ul>

      {/* cart button */}
      <Link to={'/cart'} type="button" className="btn btn-warning position-relative cart-btn">
        <FaShoppingCart className="fs-4"/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>

    </div>
   </div>
   </>
  )
}

export default Navbar
