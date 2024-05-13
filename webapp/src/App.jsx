import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State to hold the data received from the API
  const [responseData, setResponseData] = useState(null);

  // Function to make the API call
  const apiCall = () => {
    axios.get('http://localhost:9000')
      .then((response) => {
        // Set the response data to state
        setResponseData(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
        {/* Render the response data if available */}
        {responseData && (
          <div>
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
