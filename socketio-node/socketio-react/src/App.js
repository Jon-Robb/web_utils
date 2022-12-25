// this file is the main file for the react app
import { useEffect } from 'react';
import { initiateSocketConnection, subscribeToChat, disconnectSocket } from './socketio.services';


import logo from './logo.svg';
import './App.css';

// this is the main component for the react app
function App() {

  // this is the hook that will be called when the component is mounted
  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat((err, data) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn how to use React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to use React
        </a>
      </header>
    </div>
  );
}

export default App;
