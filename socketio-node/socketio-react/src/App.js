
import { useEffect } from 'react';
import { initiateSocketConnection } from './socketio.services';

function App(){
  useEffect(() => {
    initiateSocketConnection();
    return () => {
      disconnectSocket();
    }
  }, []);
}
 export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Learn how to use React
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn how to use React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
