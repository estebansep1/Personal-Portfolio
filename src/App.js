import './Css/App.css'
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
            <Route path='*' element={
            <div style={{
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100vh', 
              fontSize: '3rem',
            }}>
              <strong>404 Error</strong>: Page does not exist
            </div>
          } />
          </Routes>
      </Router>
    </div>
  );
}

export default App;