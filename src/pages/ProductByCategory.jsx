import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import Products from "../components/Products";
import { Videos, items } from "../context/Data";

const ProductByCategory = () => {
  const { cat } = useParams();

  const videoByCategory = Videos.find(
  (vid) => vid.category.toLowerCase() === cat.toLowerCase()
);


  const ProductByCategory = items.filter(
    (pro) => pro.category.toLowerCase() === cat.toLowerCase()
  );

  return (
    <div>
      {videoByCategory && <VideoPlayer src={videoByCategory.url} />}
      <Products items={ProductByCategory} />
    </div>
  );
};

export default ProductByCategory;
