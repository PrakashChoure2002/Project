import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5161/api', // Replace with your Spring Boot backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
