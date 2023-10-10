import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
