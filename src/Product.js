import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
      <img className='product_img' src={image} alt="" />
        <h3>{title}</h3>
        <p className='product_price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        
        <div className='product_rating'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐️</p>
                ))}
        </div>
      </div>
      <button onClick={addToBasket} class="button-86">Add to cart</button>
    </div>
  )
}

export default Product
