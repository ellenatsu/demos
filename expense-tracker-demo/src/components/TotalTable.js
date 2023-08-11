import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDb } from "../firebase";

//display data from firebase database

export const TotalTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firebaseDb, "budget-summary")
        );
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Month</th>
            <th>Budget</th>
            <th>Grocery</th>
            <th>Food</th>
            <th>Activity</th>
            <th>Pet</th>
            <th>Thor</th>
            <th>Ellen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.budget}</td>
              <td>{doc.grocery}</td>
              <td>{doc.food}</td>
              <td>{doc.activity}</td>
              <td>{doc.pet}</td>
              <td>{doc.th}</td>
              <td>{doc.el}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
