import React, { useState, useEffect } from "react";
import Product from "../Components/Product";

const About = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

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
      <div>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <h1>{inputValue}</h1>
      </div>
      <div>
        <button onClick={handleIncrease}>+</button>
        {count}
        <button onClick={handleDecrease}>-</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {items.length === 0 ? (
          <div>Loading</div>
        ) : (
          items.map((item) => <Product product={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default About;
