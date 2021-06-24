import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from "./Components/NavBar";
import "./App.css";

const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_BASE}/transactions`, newTransaction)
      .then((response) => {
        setTransactions([...transactions, newTransaction]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTransaction = (index) => {
    axios.delete(`${API_BASE}/transactions/${index}`).then(
      (response) => {
        const updateArray = [...transactions];
        updateArray.splice(index, 1);
        setTransactions(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const updateTransaction = (updatedTransaction, index) => {
    axios.put(`${API_BASE}/transactions/${index}`, updatedTransaction).then(
      (response) => {
        const updateArray = [...transactions];
        updateArray[index] = updatedTransaction;
        setTransactions(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`).then((response) => {
      const { data } = response;
      setTransactions(data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} />
            </Route>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions/:index">
              <Show
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            </Route>
            <Route path="/transactions/:index/edit">
              <Edit
                transactions={transactions}
                updateTransaction={updateTransaction}
              />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
