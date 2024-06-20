import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
  
    return (
      <div className="not-found-container">
        <div className="error-title">
          404 Error
        </div>
        <div className="error-message">
          Page does not exist
        </div>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-primary"
        >
          Go Home
        </button>
      </div>
    );
  }
  
  export default NotFound;