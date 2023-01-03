import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';
import MyAnimation from './components/MyAnimation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirstComponent />
    <UserComponent name="Jon" age={34} address="123 Main St" dob={new Date(1990, 1, 1)} />
    <MyAnimation />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
