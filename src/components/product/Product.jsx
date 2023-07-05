import React from "react";
import "./Product.css";

export default function Product(product) {
  const { image, title, description, price } = product;

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price}lakh</p>
      <button className="product-button">Add To Cart</button>
    </div>
  );
}
