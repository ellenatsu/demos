import React from "react";

export const DetailTable = ({ data }) => {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.payee}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td colSpan="4">No data available</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};
