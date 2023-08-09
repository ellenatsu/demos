import React, { useState } from "react";
import { TotalTable } from "./components/TotalTable";
import { DetailTable } from "./components/DetailTable";
import { InputForm } from "./components/InputForm";
import { Header } from "./components/Header";

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

    //get month number
    const month = getMonthFromInput(date);
    //first, judge the month, every month is a new item.

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

  const getMonthFromInput = (inputDate) => {
    const dateObject = new Date(inputDate);
    const month = dateObject.getMonth();
    return month;
  };

  return (
    <div>
      <Header />
      <InputForm onSubmit={submitHandler} />
      <TotalTable data={budgetData} />
      <DetailTable data={detailData} />
    </div>
  );
};
