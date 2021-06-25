import { useState } from "react";
import { useParams } from "react-router-dom";
import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction, transactions }) {
  let { index } = useParams();
  const [transaction] = useState(transactions[index]);
  return (
    <div className="Show">
      <h1>Transaction Details</h1>
      <section>
        <TransactionDetails
          transaction={transaction}
          index={index}
          deleteTransaction={deleteTransaction}
        />
      </section>
    </div>
  );
}

export default Show;
