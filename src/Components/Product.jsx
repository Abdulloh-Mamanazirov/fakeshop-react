import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} width="100%" alt="" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
};

export default Product;
