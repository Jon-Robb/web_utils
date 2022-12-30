import { useEffect } from 'react';
import { initiateSocketConnection, subscribeToChat, disconnectSocket } from './socketio.service';

function App() {

  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat((err, data) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    }
  }, []);

}
export default App; 