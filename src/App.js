import React from 'react';
import Header from './componets/Header';
import Balance from './componets/Balance';
import IncomeExpences from './componets/IncomeExpenses';
import TransactionList from './componets/TransactionList';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
      </div>
      <TransactionList />
    </div>
  );
}

export default App;
