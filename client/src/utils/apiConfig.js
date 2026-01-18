// src/utils/apiConfig.js
// This file contains the base URL and configuration for API calls

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

export { API_BASE_URL, BACKEND_URL };
