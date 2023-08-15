import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
import { firebaseDb } from "../firebase";

//display data from firebase database

export const DetailTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const q = query(
        collection(firebaseDb, "budget-detail"),
        where("amount", "!=", "0"),
        limit(20)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });

      return () => unsubscribe();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      {data.length > 0 ? (
        <tbody>
          {data.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.date}</td>
              <td>{doc.payee}</td>
              <td>{doc.category}</td>
              <td>{doc.amount}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td>No data available</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};
