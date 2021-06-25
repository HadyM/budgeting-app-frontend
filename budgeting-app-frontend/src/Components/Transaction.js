import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  let amountTotal = new Intl.NumberFormat().format(
    transaction.amount.toFixed(2),
  );
  return (
    <tr>
      <td>
        <h4>{transaction.date}</h4>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>
          <h4>{transaction.name}</h4>
        </Link>
      </td>
      <td>
        <h4
          className={
            transaction.negative ? "negativeClassTwo" : "positiveClassTwo"
          }
        >
          {transaction.negative ? `$ -${amountTotal}` : `$ ${amountTotal}`}
        </h4>
      </td>
    </tr>
  );
}

export default Transaction;
