import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import vector from "../Image/Vector.svg";
import "./Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const navigate = useNavigate()
  return (
    
      <section className="NavbarContainer">
        <ul>
          <div className="logo-container">
          <img className="vector" src={vector} alt="Logo" />
          <p>iStore</p>
          </div>

          <li>
            <NavLink className="navbar" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar" to="/store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar" to="/card">
              card
            </NavLink>
            </li>
        </ul>
        <div className="user" onClick={()=>navigate("/register")}>
            <AccountCircleIcon fontSize="inherit"/> <p className="user-p">user</p>
        </div>
      </section>
  );
}
