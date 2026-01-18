// src/context/AuthContext.jsx
// This manages user authentication state globally

import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginUser, logoutUser, registerUser, getCurrentUser } from '../services/authService.js';

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check if user is already logged in when app loads
    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await getCurrentUser();
                if (response?.data) {
                    setUser(response.data);
                }
            } catch (err) {
                console.log('User not logged in');
            } finally {
                setIsLoading(false);
            }
        };

        checkUser();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            setError(null);
            setIsLoading(true);
            const response = await loginUser({ email, password });
            setUser(response.data);
            return response;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // Register function
    const register = async (fullName, email, password, phone) => {
        try {
            setError(null);
            setIsLoading(true);
            const response = await registerUser({ fullName, email, password, phone });
            setUser(response.data);
            return response;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            setError(null);
            setIsLoading(true);
            await logoutUser();
            setUser(null);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        user,
        isLoading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
