import React from "react";
import { TotalTable } from "./components/TotalTable";
import { DetailTable } from "./components/DetailTable";
import { InputForm } from "./components/InputForm";
import { Header } from "./components/Header";

export const App = () => {
  const calculateHandler = (userInput) => {
    //calculate the data
  };

  return (
    <div>
      <Header />
      <InputForm />
      <TotalTable />
      <DetailTable />
    </div>
  );
};
 