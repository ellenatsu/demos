import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { TotalTable } from "../components/TotalTable";
import { DetailTable } from "../components/DetailTable";
import { InputForm } from "../components/InputForm";
import { Header } from "../components/Header";
import { LoginPopup } from "../components/LoginPopup";
import { useMonthlyData } from "../hooks/index";
import { firebaseApp, firebaseAuth, firebaseDb } from "../firebase";

export const ExpenseTrackerPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const { monthData, updateMonthlyData } = useMonthlyData("202308");

  const submitHandler = (userInput) => {
    //add new data to budget-detail already done in the input form
    //revise the budget-summary data
    const amount = +userInput["amount"]; //turns to numbers
    const selectedPayee = userInput["payee"];
    const selectedCategory = userInput["category"];
    const date = transformDate(userInput["date"]);

    const updatedFields = {
      budget: amount,
      grocery: selectedCategory === "grocery" ? amount : 0,
      food: selectedCategory === "food" ? amount : 0,
      activity: selectedCategory === "activity" ? amount : 0,
      pet: selectedCategory === "pet" ? amount : 0,
      th: selectedPayee === "t" ? amount : 0,
      el: selectedPayee === "e" ? amount : 0,
    };
    updateMonthlyData(date, updatedFields);
  };

  const transformDate = (inputDateValue) => {
    const parsedDate = new Date(inputDateValue);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1; // Months are zero-based
    const formattedDate = `${year}${month.toString().padStart(2, "0")}`;

    return formattedDate; // Output: "202308"
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
      <TotalTable />
      <DetailTable />
    </div>
  );
};
