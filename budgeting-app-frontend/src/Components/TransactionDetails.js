import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function TransactionDetails(props) {
  const { deleteTransaction } = props;
  const [transaction, setTransaction] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/transactions/${index}`)
      .then((response) => {
        const { data } = response;
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [index, history]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  let amountTotal = new Intl.NumberFormat().format(transaction.amount);

  return (
    <div>
      <h2>
        Date:{" "}
        <span>
          <h4>{transaction.date}</h4>
        </span>
      </h2>
      <h2>
        Name:{" "}
        <span>
          <h4>{transaction.name}</h4>
        </span>
      </h2>
      <h2>
        From:{" "}
        <span>
          <h4>{transaction.from}</h4>
        </span>
      </h2>
      <h2>
        Amount:{" "}
        <span>
          <h4
            className={
              transaction.negative ? "negativeClassThree" : "positiveClassThree"
            }
          >
            {transaction.negative ? `$ -${amountTotal}` : `$ ${amountTotal}`}
          </h4>
        </span>
      </h2>
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <br />
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(TransactionDetails);
