import React from "react";
import { Link , useLocation } from "react-router-dom";
import ShopByCategory from "./ShopByCategory";
// import { useLocation } from from "react-router-dom";

const Products = ({ items }) => {
  const {pathname} = useLocation();
  return (
    <>
    {pathname == "/" && <ShopByCategory />}
    
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 d-flex justify-content-center"
            >
              <div className="card product-card text-center" style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`} className="image-container">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="product-price">{product.price}₹</p>
                  <div className="button-container">
                    <button className="btn add-to-cart">🛒 Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
