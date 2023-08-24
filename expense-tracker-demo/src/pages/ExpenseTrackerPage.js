import React from "react";
import { TotalTable } from "../components/expenseTracker/TotalTable";
import { DetailTable } from "../components/expenseTracker/DetailTable";
import { InputForm } from "../components/expenseTracker/InputForm";
import { useMonthlyData } from "../hooks/expense";
import { Header } from "../components/header/Header";

export const ExpenseTrackerPage = () => {
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
      <InputForm onSubmit={submitHandler} />
      <TotalTable />
      <DetailTable />
    </div>
  );
};
