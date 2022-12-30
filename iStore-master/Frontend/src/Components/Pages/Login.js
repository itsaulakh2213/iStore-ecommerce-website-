import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUser } from "../Services/auth";
import { addToken } from "../Services/auth";
import Navbar from "../layout/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToken());
  }, [dispatch]);

  const Login = () => {
    dispatch(fetchLoginUser({ email, password }));
  };

  const { message, token } = useSelector((state) => state.users);

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  return (
    <Fragment>
      <Navbar/>
      <section className="login-cantainer">
        <section className="login-form" autoComplete="off">
          <h1>Login user</h1>
          {message && <h3 className="error">{message}</h3>}
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="type your email address"
          />
          <input
            className="input"
            type="password"
            placeholder="type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={() => Login()}>
          done
          </button>
          <Link to="/profile">you have not register ?</Link>
        </section>
      </section>
      
    </Fragment>
  );
}
