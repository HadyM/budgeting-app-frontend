import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TransactionNewForm(props) {
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
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="New">
      <Form onSubmit={handleSubmit} className="Form">
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            id="date"
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
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
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
        <Form.Group>
          <Form.Label>From</Form.Label>
          <Form.Control
            id="from"
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
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            id="amount"
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
        <Form.Group>
          <Form.Check
            id="negative"
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

export default withRouter(TransactionNewForm);
