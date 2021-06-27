import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function TransactionEditForm(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    negative: false,
  });

  const handleInputChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleCheckBoxChange = () => {
    if (transaction.amount) {
      setTransaction({ ...transaction, negative: !transaction.negative });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTransaction(transaction, index);
    history.push("/transactions");
  };

  const handleCancel = () => {
    history.push(`/transactions/${index}`);
  };

  useEffect(() => {
    axios.get(`${API_BASE}/transactions/${index}`).then(
      (response) => {
        const { data } = response;
        setTransaction(data);
      },
      (error) => {
        history.push("/not-found");
      },
    );
  }, [index, history]);

  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit} className="EditForm">
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            value={transaction.date}
            onChange={handleInputChange}
            placeholder="Enter Month and Day"
            required
          />
          <Form.Text className="text-muted">
            Please enter Full Month and day example "November 23"
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={transaction.name}
            onChange={handleInputChange}
            placeholder="Enter Name of Transaction"
            required
          />
          <Form.Text className="text-muted">
            Please enter Name Description of the Transaction example "Billing"
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicFrom">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="text"
            value={transaction.from}
            onChange={handleInputChange}
            placeholder="Enter From"
            required
          />
          <Form.Text className="text-muted">
            Please enter Name Description of From example "Apple"
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={transaction.amount}
            onChange={handleNumberChange}
            placeholder="Enter Amount of Transaction"
            required
          />
          <Form.Text className="text-muted">
            Please enter Amount of the Transaction example "500"
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            // id="negative"
            type="checkbox"
            label="Check if Negative Amount"
            onChange={handleCheckBoxChange}
            value={transaction.negative}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <Button variant="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default TransactionEditForm;
