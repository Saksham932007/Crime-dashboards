import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [crimeData, setCrimeData] = useState([]);

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/crime-data?country=USA');
        setCrimeData(response.data);
      } catch (error) {
        console.error('Error fetching crime data:', error);
      }
    };

    fetchCrimeData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crime Dashboard</h1>
        <ul>
          {crimeData.map((crime, index) => (
            <li key={index}>{crime.type}: {crime.rate}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;