import React, { useState } from 'react';
import './Darkmode.scss';

const DarkModeToggle = () => {
  const [selected, setSelected] = useState('light');

  const toggleDarkMode = () => {
    console.log('Toggle button was lcicked!')
    document.body.classList.toggle('dark-mode');
    setSelected((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`dark-mode-toggle ${selected === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
