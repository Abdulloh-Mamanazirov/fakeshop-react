import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);
  function handleOpenDesc() {
    setOpen(!open);
  }
  return (
    <div className="card">
      <img src={product.image} width="100%" alt="productImage" />
      <h2>{product.title}</h2>
      <h3><strong>Price:</strong> <span className="price">$ {product.price}</span></h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating.rate} / 5</p>
      <div className="actionBtns">
        <button className="btn" onClick={handleOpenDesc}>See Description</button>
        <Link className="btn btnMore" to={`/more/${product.id}`}>More Info</Link>
      </div>
      {open && <p>{product.description}</p>}
    </div>
  );
};

export default Product;
