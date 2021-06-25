import TransactionNewForm from "../Components/TransactionNewForm";

function New({ addTransaction }) {
  return (
    <div className="New">
      <h1>New Transaction Form</h1>
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;
