import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ex1 from './components/Ex1';
import Condition from './components/Condition';
import Ex2 from './components/Ex2';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import ArrState from './components/ArrState';
import ObjState from './components/ObjState';

function App() {
  return (
    <div className="App">
      <ObjState />
    </div>
  );
}

export default App;
