import React, { useState, useEffect } from "react";
import { TotalTable } from "./components/TotalTable";
import { DetailTable } from "./components/DetailTable";
import { InputForm } from "./components/InputForm";
import { Header } from "./components/Header";
import { LoginPopup } from "./components/LoginPopup";

import { firebaseApp, firebaseAuth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const App = () => {
  const initalFormData = {
    date: "",
    payee: "",
    amount: "",
    category: "",
  };

  const initalMonthData = {
    budget: 1800.0,
    grocery: 0.0,
    food: 0.0,
    activity: 0.0,
    pet: 0.0,
    t: 0.0,
    e: 0.0,
  };
  //for detail table
  const [detailData, setDetailData] = useState([initalFormData]);

  //for total amount table one month row
  const [budgetData, setBudgetData] = useState(initalMonthData);
  //for total amount table full rows
  const [monthlyData, setMonthlydata] = useState([initalMonthData]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const submitHandler = (userInput) => {
    setDetailData([...detailData, userInput]);

    calculateAmount(userInput);
  };

  const calculateAmount = (userInput) => {
    //calculate the data
    const amount = +userInput["amount"];
    const selectedPayee = userInput["payee"];
    const selectedCategory = userInput["category"];
    const date = userInput["date"];
    setBudgetData((prevData) => ({
      budget: prevData.budget - amount,
      grocery:
        selectedCategory === "grocery"
          ? prevData.grocery + amount
          : prevData.grocery,
      food:
        selectedCategory === "food" ? prevData.food + amount : prevData.food,
      activity:
        selectedCategory === "activity"
          ? prevData.activity + amount
          : prevData.activity,
      pet: selectedCategory === "pet" ? prevData.pet + amount : prevData.pet,
      t: selectedPayee === "t" ? prevData.t + amount : prevData.t,
      e: selectedPayee === "e" ? prevData.e + amount : prevData.e,
    }));
    //const newItem = {};
    //setMonthlyData([...budgetData, newItem]);
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
        <button onClick={handleOpenPopup}>Open Login</button>
      )}
      {isPopupOpen && <LoginPopup onClose={handleClosePopup} />}

      <InputForm onSubmit={submitHandler} />
      <TotalTable data={budgetData} />
      <DetailTable data={detailData} />
    </div>
  );
};
