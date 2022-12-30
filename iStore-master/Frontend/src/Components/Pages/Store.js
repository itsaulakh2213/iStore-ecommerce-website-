import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "./Store.css";
import { getProduct } from "../Services/Product";
import { useSelector, useDispatch } from "react-redux";

export default function Store() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { product } = useSelector((state) => state.product);
  console.log(product);
  return (
    <section className="store-Container">
      <Navbar />
      <section className="store-page">
        <div className="banner">
          <h2>Main Store</h2>
        </div>
      </section>
      <h2 className="Store-title">main store</h2>
      {product.map((item) => (
        <div className="Product-container" key={item._id}>
          <img className="product-image" src={item.image} alt={item.name} />
          <div className="product-content">
            <h4 className="product-title">{item.name}</h4>
            <p>{item.description}</p>
            <strong className="product-price">price - rs {item.price}/-</strong>

            <button className="product-btn">add to card</button>
          </div>
        </div>
      ))}
      <Footer />
    </section>
  );
}
