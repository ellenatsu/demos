import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LoginForm } from "../components/LoginComponents/LoginForm";
import { firebaseAuth } from "../firebase";
import { Header } from "../components/Header/Header";

export const LoginPage = () => {
  //log in status
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        console.log("user not log in");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out.");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      {user ? (
        <div>
          <p>Current User: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
