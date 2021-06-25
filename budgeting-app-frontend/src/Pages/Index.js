import React, { useState, useEffect } from "react";
import Transactions from "../Components/Transactions";
import { apiURL } from "../util/apiURL";
import axios from "axios";


const API_BASE = apiURL();

function Index({ transactions }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`${API_BASE}/transactions/total`).then(
      (response) => {
        setTotal(response.data);
      },
      (error) => {
        console.log(error);
      },
    );
  }, [transactions]);

  return (
    <div className="Index">
      <h1>Pursuit FullStack Bank</h1>
      <h2>
        Coding Account Total:{" "}
        <span className={total > 1000 ? "positiveClass" : "negativeClass"}>
          ${new Intl.NumberFormat().format(total.toFixed(2))}
        </span>
      </h2>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
