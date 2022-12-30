import React, { Fragment } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "./About.css";

export default function About() {
  return (
    <Fragment>
      <section className="About-Container">
        <Navbar />
        <section className="Aboutpage">
          <div className="banner">
            <h2>About us</h2>
          </div>
          <div className="about-content">
            <h2 >Come build the business with us</h2>
            <p className="about-p">
              iStore Bazaar, Delhi is one of the most popular markets in the
              country. It is the lifeline of trade envisaging the culture and
              community of Delhi. Lakhs of buyers visit the market every day for
              purchasing a wide variety of products available there.
            </p>
            <p className="about-p">
              Imagine being able to buy these products from iStore Bazaar
              without the hustle and bustle of going there. Sounds interesting,
              right? This is the vision with which iStore.com was founded.
            </p>
            <p className="about-p">
              The promotors of iStore.com - an online platform joined hands with
              the sellers of India's oldest and the most loved ‘iStore
              Bazaar’with a vision to uphold and elevate its values. The idea is
              to remove the barriers of the physical market and pass its
              benefits to the end consumers digitally where buying for them is
              just a click away.
            </p>
            <p className="about-p">
              We aim to bring iStore Bazaar to the home of millions of people
              through iStore.com where shopping could be completed within
              minutes and product will be delivered at your doorstep. We strive
              to achieve this providing the best customer experience,
              convenience and service to our valuable buyers through their
              digital screens and making it available 24x7.
            </p>
          </div>
        </section>
        <Footer />
      </section>
    </Fragment>
  );
}
