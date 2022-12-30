import React, { Fragment } from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Fragment>
      <section className="footer-container">
        <div className="footer-item">
          <h2>iStore</h2>
        </div>
        <div className="footer-item">
          <h1>Address</h1>
          <p>Shop-30 Mc market sirsa-125055, haryana</p>
        </div>
        <div className="footer-item1">
          <p>
            <InstagramIcon fontSize="inherit" />
          </p>
          <p>
            <GitHubIcon fontSize="inherit" />
          </p>
          <p>
            <LinkedInIcon fontSize="inherit" />
          </p>
          <p>
            <EmailIcon fontSize="inherit" />
          </p>
        </div>
      </section>
      <section className="copyright">
        Copyright <CopyrightIcon fontSize="large" /> All rights reserved. Design by Black Virus
      </section>
    </Fragment>
  );
}
