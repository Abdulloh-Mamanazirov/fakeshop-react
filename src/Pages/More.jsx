import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import MoreHeader from '../Components/MoreHeader'

const More = () => {

  const {itemId} = useParams()
  const [item, setItem] = useState({})
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);
  console.log(item.category);
  return (
    <>
      <MoreHeader />
      <div className="moreItemDetails">
        <div className="moreItemDetails-img">
          <img src={item.image} alt="" />
        </div>
        <div className="moreItemDetails-info">
          <h2>{item.title}</h2>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <div>
            <p>
              <strong>Rating:</strong> {item.rating?.rate} / 5
            </p>
            <p>
              <strong>Votes:</strong> {item.rating?.count}
            </p>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default More
