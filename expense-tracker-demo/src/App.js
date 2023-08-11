import React, { useState, useEffect } from "react";
import { TotalTable } from "./components/TotalTable";
import { DetailTable } from "./components/DetailTable";
import { InputForm } from "./components/InputForm";
import { Header } from "./components/Header";
import { LoginPopup } from "./components/LoginPopup";

import { firebaseApp, firebaseAuth, firebaseDb } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, updateDoc, doc } from "firebase/firestore";

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

  const submitHandler = (userInput) => {
    //add new data to budget-detail already done in the input form
    //setDetailData([...detailData, userInput]);
    //revise the budget-summary data
    calculateAmount(userInput);
  };

  const calculateAmount = (userInput) => {
    //calculate the data
    const amount = +userInput["amount"];
    const selectedPayee = userInput["payee"];
    const selectedCategory = userInput["category"];
    const date = transformDate(userInput["date"]);
    //get the data frist

    const updatedFields = {
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
      th: selectedPayee === "t" ? prevData.t + amount : prevData.t,
      el: selectedPayee === "e" ? prevData.e + amount : prevData.e,
    };
    reviseData(date, updatedFields);
  };

  const reviseData = async (date, updatedFields) => {
    const documentRef = doc(firebaseDb, "budget-summary", date);
    try {
      await updateDoc(documentRef, updatedFields);
      console.log(date + "Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
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
      <DetailTable data={detailData} />
    </div>
  );
};
