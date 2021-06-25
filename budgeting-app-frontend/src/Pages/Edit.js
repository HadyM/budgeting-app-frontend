import TransactionEditForm from "../Components/TransactionEditForm";

function Edit({ updateTransaction, transactions }) {
  return (
    <div className="New Edit">
      <h1>Edit Transaction</h1>
      <TransactionEditForm
        updateTransaction={updateTransaction}
        transactions={transactions}
      />
    </div>
  );
}

export default Edit;
