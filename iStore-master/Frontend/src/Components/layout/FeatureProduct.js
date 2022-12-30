import React, { Fragment } from "react";
import "./FeatureProduct.css";
import dress4 from "../Image/dress4.jpg";
import { Button } from "@mui/material";

export default function FeatureProduct() {
  return (
    <Fragment>
      <h1 className="MPP">Most Popular Product</h1>
      <section className="Feature-main-container">
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>

          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>
          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>
          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>

          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>
          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
        <div className="Feature-container">
          <img className="product-image" src={dress4} alt="product" />
          <h4 className="product-title">t-Shirt Black</h4>
          <strong className="product-price">MRP - 250</strong>
          <Button className="product-btn" variant="contained">
            Buy Now
          </Button>
        </div>
      </section>
    </Fragment>
  );
}
