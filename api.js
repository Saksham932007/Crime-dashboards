import axios from 'axios';

function fetchCrimeData() {
  axios.get('http://localhost:5000/crime-data?country=USA')
    .then(response => {
      console.log('Crime Data:', response.data);
      // Process the data as needed
    })
    .catch(error => {
      console.error('Error fetching crime data:', error);
    });
}

// Call the function to fetch data
fetchCrimeData();import axios from 'axios';

function fetchCrimeData() {
  axios.get('http://localhost:5000/crime-data?country=USA')
    .then(response => {
      console.log('Crime Data:', response.data);
      // Process the data as needed
    })
    .catch(error => {
      console.error('Error fetching crime data:', error);
    });
}

// Call the function to fetch data
fetchCrimeData();