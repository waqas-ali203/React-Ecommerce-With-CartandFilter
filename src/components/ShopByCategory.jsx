import React, { useContext, useState } from 'react'
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaHeadphones,
  FaThLarge,
  FaRupeeSign,
} from "react-icons/fa";
import DataContext from '../context/DataContext'
import { items } from '../context/Data';

const categories = [
  { name: "All Products", icon: <FaThLarge /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Tablets", icon: <FaTabletAlt /> },
  { name: "Watches", icon: <FaClock /> },
];

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];

const ShopByCategory = () => {
  const {setProducts} = useContext(DataContext);

  const [selectedPrice , setSelectedPrice] = useState(80000);
  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded shadow-lg">
        <h3 className='text-center mb-3'>Filter Products</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map(({ name, icon }) => (
          <div
            key={name}
            className="d-flex align-items-center gap-2 px-3 py-2 rounded bg-secondary text-light fw-bold"
            style={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => filterByCategory(name)}
          >
            {icon} <span>{name}</span>
          </div>
        ))}
        </div>
      </div>
    </>
)

  
}

export default ShopByCategory
