import Transaction from "./Transaction";
import Table from "react-bootstrap/Table";

function Transactions({ transactions }) {
  return (
    <div className="Transactions">
      <section>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Transactions;
