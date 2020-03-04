import React from 'react';
import { Header } from './components/header';
import { TotalRemaining } from './components/TotalRemaining';
import { Calorie } from './components/Calorie';
import { ItemsList } from './components/ItemsList';
import { AddNewFood } from './components/AddNewFood';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Calorie />
        <TotalRemaining />
        <ItemsList />
        <AddNewFood />
      </div>
    </GlobalProvider>
  );
}

export default App;
