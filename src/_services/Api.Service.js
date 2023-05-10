import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Create an isntance of Axios with a custom base URL
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Define the GET request function
const getRequest = async (endpoint) => {
  return axiosInstance
    .get(endpoint)
    .then((response) => response.data)
    .then((data) => data.data)
    .catch((error) => {
      // Log the error
      console.error('Error making GET request:', error);
      throw error;
    });
};

// Define getters for API endpoints
const getUser = async (userId) => getRequest(`/user/${userId}`);
const getUserActivity = async (userId) => getRequest(`/user/${userId}/activity`);
const getUserAverageSessions = async (userId) => getRequest(`/user/${userId}/average-sessions`);
const getUserPerformance = async (userId) => getRequest(`/user/${userId}/performance`);

export { getUser, getUserActivity, getUserAverageSessions, getUserPerformance };
