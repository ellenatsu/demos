import { useState, useEffect } from "react";
import { firebaseDb } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
//hooks to listen to the firebase database change

//to update monthly summary data
export const useMonthlyData = (month) => {
  const [monthlyData, setMonthlyData] = useState(null);

  const initalMonthData = {
    budget: 0.0,
    grocery: 0.0,
    food: 0.0,
    activity: 0.0,
    pet: 0.0,
    t: 0.0,
    e: 0.0,
  };

  //listen to the firestore collection data to make sure the monthlyData is current one
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(firebaseDb, "budget-summary", month);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMonthlyData(docSnap.data());
        } else {
          // If the document doesn't exist, initialize it with initialMonthData
          await docRef.set(initalMonthData);
          setMonthlyData(initalMonthData);
        }
      } catch (error) {
        console.error("Error fetching Monthly summary data", error);
      }
    };

    fetchData();
  }, [month]);

  //update the doc with the new data
  const updateMonthlyData = async (month, updatedFields) => {
    const documentRef = doc(firebaseDb, "budget-summary", month);
    const updatedData =
      //set the updated data
      {
        budget: monthlyData.budget - updatedFields.budget,
        grocery: monthlyData.grocery + updatedFields.grocery,
        food: monthlyData.food + updatedFields.food,
        activity: monthlyData.activity + updatedFields.activity,
        pet: monthlyData.pet + updatedFields.pet,
        th: monthlyData.th + updatedFields.th,
        el: monthlyData.el + updatedFields.el,
      };

    try {
      await updateDoc(documentRef, updatedData);
      console.log(month + "Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return { monthlyData, updateMonthlyData };
};
