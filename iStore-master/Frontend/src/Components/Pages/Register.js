import { useState, useEffect } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Services/auth";
import { addToken } from "../Services/auth";
import Navbar from "../layout/Navbar";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.users);

  const PostData = () => {
    dispatch(
      fetchUser({
        name,
        email,
        number,
        password,
      })
    );
  };

  useEffect(() => {
    dispatch(addToken());
  }, [dispatch]);

  return (
    <>
     <Navbar/>
      <section className="register-cantainer">
        <section className="register-form" autoComplete="off">
          <h1>Register user</h1>
          {message && <h3 className="error">{message}</h3>}
          <input
            className="input"
            type="text"
            placeholder="type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="type your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="number"
            placeholder="type your number"
            autoComplete=""
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" onClick={() => PostData()}>
            done
          </button>
          <Link to="/login">
            You have already register ? 
          </Link>
        </section>
      </section>
    </>
  );
}
