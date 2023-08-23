import React, { useState } from "react";
import { firebaseAuth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./LoginForm.css"; // Apply your styles here

export const LoginForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        //jump to the home page
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        //jump to the home page
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};
