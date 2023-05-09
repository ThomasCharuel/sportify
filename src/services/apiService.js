import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Create an isntance of Axios with a custom base URL
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Define the GET request function
export async function getRequest(endpoint) {
  return axiosInstance
    .get(endpoint)
    .then((response) => response.data)
    .then((data) => data.data)
    .catch((error) => {
      // Log the error
      console.error('Error making GET request:', error);
      throw error;
    });
}
