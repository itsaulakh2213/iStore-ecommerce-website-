import React, { useEffect} from "react";
import "./EditProduct.css";
import { getProduct } from "../Services/Product";
import { useSelector, useDispatch } from "react-redux";


export default function EditProduct() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  const { product } = useSelector((state) => state.product);
  console.log(product)
  return (
    <section className="EditProduct-main-container">
      {product.map( item =>  (
        <div className="EditProduct-container" key={item._id}>
          <img className="product-image" src={item.image} alt={item.name} />
          <div className="product-content">
          <h4 className="product-title">{item.name}</h4>
          <p>{item.description}</p>
          <strong className="product-price">price - rs {item.price}/-</strong>
          <div className="product-content-btn">
          <button className="product-btn">Edit</button>
          <button className="product-btn">Delete</button>
          </div>
          </div>
          
        </div>
      ))}
    </section>
  );
}
