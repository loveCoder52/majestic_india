// src/services/authService.js
// This file contains all authentication-related API calls

import { API_BASE_URL, BACKEND_URL } from '../utils/apiConfig.js';

/**
 * Register a new user
 * @param {Object} userData - User data (fullName, email, password, phone)
 * @returns {Promise} - Response from backend
 */
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // IMPORTANT: This sends cookies
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }

        return data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

/**
 * Login user
 * @param {Object} credentials - Login credentials (email, password)
 * @returns {Promise} - Response from backend with user data
 */
export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // IMPORTANT: This sends cookies
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

/**
 * Logout user
 * @returns {Promise} - Response from backend
 */
export const logoutUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // IMPORTANT: This sends cookies
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Logout failed');
        }

        return data;
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};

/**
 * Get current logged-in user
 * @returns {Promise} - Current user data
 */
export const getCurrentUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // IMPORTANT: This sends cookies
        });

        const data = await response.json();

        if (!response.ok) {
            // If user is not logged in, return null instead of throwing
            if (response.status === 401) {
                return null;
            }
            throw new Error(data.message || 'Failed to fetch user');
        }

        return data;
    } catch (error) {
        console.error('Get user error:', error);
        return null;
    }
};
