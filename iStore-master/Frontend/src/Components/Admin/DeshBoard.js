import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Deshboard.css";

export default function DeshBoard() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin/home">
            Deshboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                iStore
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/admin/home"
                  >
                    Deshboard
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <p
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </p>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li className="nav-item">
                      <Link className="nav-link" to="/allproduct">
                        all Product
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/create-product">
                        Create Product
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/order">
                    order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
