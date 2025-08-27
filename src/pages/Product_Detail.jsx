import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { items } from "../context/Data";
import Products from "../components/Products";
import "./ProductDetail.css";
import DataContext from "../context/DataContext";

const Product_Detail = () => {
  const { addToCart } = useContext(DataContext);

  const { id } = useParams();
  const product = items.find((pro) => pro.id == id);
  const relatedProducts = items.filter(
    (pro) => pro.category.toLowerCase() == product.category.toLowerCase()
  );

  return (
    <>
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="product-image"
            />
          </div>
          <div className="info-section">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price} ₹</p>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.price,
                  product.imgSrc
                )
              }
              className="btn add-to-cart"
            >
              🛒 Add To Cart
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center my-5">Related Products</h2>
      <Products items={relatedProducts} />
    </>
  );
};

export default Product_Detail;
