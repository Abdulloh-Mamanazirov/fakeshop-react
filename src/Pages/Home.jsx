import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../Components/Product";

const About = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [count]);

  return (
    <div>
      <div className="nav">
        <Link className="logo" to={"/"}>FakeShop</Link>
        <div className="btns">
          <button onClick={handleDecrease}>-</button>
          {count}
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <div className="productWrapper">
        {items.length === 0 ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          items.map((item) => <Product product={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default About;
