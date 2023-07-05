import React from "react";
import Product from "../product/Product";
import "./Products.css";
import cybertruckImage from "../../assets/cybertruck.jpg";
import modelSImage from "../../assets/model-s.jpg";
import modelXImage from "../../assets/model-x.jpg";
import teslaCharger from "../../assets/tesla-charger.jpg";

const products = [
  {
    id: 1,
    image: cybertruckImage,
    title: "Cybertruck",
    description: "Description of Product 1",
    price: "₹ 99.99 lakh",
  },
  {
    id: 2,
    image: modelSImage,
    title: "Model S",
    description: "Description of Product 2",
    price: "₹ 60.55 lakh",
  },
  {
    id: 3,
    image: modelXImage,
    title: "Model X",
    description: "Description of Product 3",
    price: "₹ 66.55 lakh",
  },
  {
    id: 4,
    image: teslaCharger,
    title: "Charger",
    description: "Description of Product 4",
    price: "₹ 1.99 lakh",
  },
  {
    id: 5,
    image: cybertruckImage,
    title: "Cybertruck",
    description: "Description of Product 5",
    price: "₹ 99.99 lakh",
  },
  {
    id: 6,
    image: modelSImage,
    title: "Model S",
    description: "Description of Product 6",
    price: "₹ 60.55 lakh",
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
