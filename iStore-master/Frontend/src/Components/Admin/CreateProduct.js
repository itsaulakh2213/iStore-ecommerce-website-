import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createproduct } from "../Services/Product";
import DeshBoard from "./DeshBoard";
import "./CreateProduct.css";

export default function CreateProduct() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };

  const handleSubmit =  () => {
    dispatch(
      createproduct({
        name,
        description,
        category,
        price,
        image,
      })
    );
  };

 
  

  return (
    <Fragment>
      <DeshBoard />
      <div className="Create-product-cantainer">
        <div className="c-productform" autoComplete="off">
          <div className="heading">Create Product</div>
          <div className="input-image">
            <input type="file" onChange={handleProductImageUpload} />
            {image ? (
              <img
                className="Preview"
                src={image}
                alt="product
            "
              />
            ) : (
              <img
                className="Preview"
                src=""
                alt="product
            "
              />
            )}
          </div>
          <input
            className="input"
            type="text"
            placeholder="product title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input "
            placeholder="product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="input"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">select one</option>
            <option value="Clothes">Clothes</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
          <input
            className="input"
            type="number"
            placeholder="product mrp"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="button" onClick={handleSubmit}>
            done
          </button>
        </div>
      </div>
    </Fragment>
  );
}
