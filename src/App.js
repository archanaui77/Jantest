import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api/fetchTransactions.js";
import { processTransactions } from "./utils/rewardsData.js";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchTransactions().then((transactions) => {
      const processedData = processTransactions(transactions);
      setData(processedData);
    });
  }, []);

  return (
    <div>
      <h1>Customer Reward Points</h1>
      {data ? (
        <table border="1">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Month</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(data||{}).map(([customerId, {name,months}]) =>
              Object.entries(months).map(([month, points]) => (
                <tr key={`${customerId}-${month}`}>
                  <td>{name}</td>
                  <td>{month}</td>
                  <td>{points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <p>Loading transactions...</p>
      )}
    </div>
  );
};

export default App;