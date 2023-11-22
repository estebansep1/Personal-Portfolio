import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<div>404 Not Found</div>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;