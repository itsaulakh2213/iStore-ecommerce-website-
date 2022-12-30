import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import "./HomePage.css";
import FeatureProduct from "../layout/FeatureProduct";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <section className="Home-Container">
        <Navbar />
        <section className="Homepage">
          <div className="banner">
            <h2>Set Your Trend</h2>
            <button>
              <Link to="/store">Shop Now</Link>
            </button>
          </div>
        </section>
        <FeatureProduct />
        <Footer className="footer1" />
      </section>
    </Fragment>
  );
}
