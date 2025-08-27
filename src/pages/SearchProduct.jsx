import React from 'react'
import { useParams } from "react-router-dom";
import { items } from '../context/Data';
import Products from '../components/Products';

const SearchProduct = () => {
const {term} = useParams();
const search_Products = items.filter(pro=>pro.title.toLowerCase().includes(term.toLowerCase()))

  return (
    <div>
      <Products items={search_Products} />
    </div>
  )
}

export default SearchProduct
