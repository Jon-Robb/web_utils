import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <><FirstComponent />
    <UserComponent name="John" age={30} address="123 Main St" dob={new Date(1990, 1, 1)} /></>
  );
}

export default App;
