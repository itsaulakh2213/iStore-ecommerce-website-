import React from "react";
import "./Product.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import product from "../Image/dress1.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import { TextField } from "@mui/material";
import FeatureProduct from "../layout/FeatureProduct";

export default function Product() {
  return (
    <>
      <Navbar />
      <section className="Product-Container">
        <img className="Product-Image" src={product} alt="product" />
        <div className="Product-Content">
          <h2>black swag shirt</h2>
          <div className="Star">
            <StarRateIcon fontSize="inherit" />
            <StarRateIcon fontSize="inherit" />
            <StarRateIcon fontSize="inherit" />
            <StarRateIcon fontSize="inherit" />
            <StarRateIcon fontSize="inherit" />
          </div>
          <p className="Product-MRP">
            Price <span className="price">Rs. 999 </span>
            <span className="tax">(Inclusive of all taxes)</span>
          </p>
          <p className="Product-Price">Rs. 499/-</p>
          <div className="Product-Stock">
            <button>+</button>
            <p>0</p>
            <button>-</button>
          </div>
          <button>Add to Card</button>
          <p className="data">Order delivered in 7 days</p>

          <p className="data">24x7 Services available</p>
        </div>
      </section>
      <section className="Product-Description">
        <h3>Product Description</h3>
        <p>
          You need goals to measure the success of product descriptions. “But
          this is going to take a long time,” you might be thinking, especially
          if you rely on product descriptions from your distributors or
          manufacturers. And you’re right, this isn’t a quick process. However,
          if you can commit to writing product descriptions using the formula
          above, you can begin to see a variety of benefits: 
          <ul>
            <li>An increase in conversion rate</li>
            <li>A decrease in cart abandonment.</li>
            <li>A lower return rate</li>
            <li>Fewer calls from shoppers</li>
            <li>Improved organic search rankings.</li>
          </ul> 
          There are
          countless product description examples, including on platforms such as
          Amazon, BigCommerce and Shopify.
        </p>
      </section>
      <FeatureProduct/>
      <section className="Product-Review">
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={4}
          size="large"
          sx={{ width: 300 }}
        />
        <button>Post</button>
      </section>
      <Footer />
    </>
  );
}
