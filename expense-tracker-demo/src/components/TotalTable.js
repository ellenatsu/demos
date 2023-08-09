import React from "react";

export const TotalTable = ({ data }) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
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
          <tr>
            <td>{data.budget}</td>
            <td>{data.grocery}</td>
            <td>{data.food}</td>
            <td>{data.activity}</td>
            <td>{data.pet}</td>
            <td>{data.t}</td>
            <td>{data.e}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
