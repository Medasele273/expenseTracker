import React from 'react';
import Header from './componets/Header';
import Balance from './componets/Balance';
import IncomeExpences from './componets/IncomeExpenses';
import TransactionList from './componets/TransactionList';

import './App.css';
import { AddTransaction } from './componets/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
