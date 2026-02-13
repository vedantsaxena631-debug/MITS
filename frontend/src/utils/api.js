import axios from 'axios';

let API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Robustness check: Ensure API_URL ends with /api for Render deployments
if (API_URL && !API_URL.endsWith('/api')) {
    API_URL = `${API_URL.replace(/\/$/, '')}/api`;
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
