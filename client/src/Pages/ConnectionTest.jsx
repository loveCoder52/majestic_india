// src/Pages/ConnectionTest.jsx
// This page tests if frontend-backend connection is working

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/apiConfig.js';

export default function ConnectionTest() {
    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const runTests = async () => {
        setLoading(true);
        const results = [];

        // Test 1: Backend Health Check
        try {
            const response = await fetch(`${API_BASE_URL.replace('/api/v1', '')}/test`);
            if (response.ok) {
                results.push({ name: 'Backend Health Check', status: 'success', message: '✅ Backend is running' });
            } else {
                results.push({ name: 'Backend Health Check', status: 'error', message: '❌ Backend responded but with error' });
            }
        } catch (error) {
            results.push({ name: 'Backend Health Check', status: 'error', message: `❌ ${error.message}` });
        }

        // Test 2: CORS Configuration
        try {
            const response = await fetch(`${API_BASE_URL}/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.status === 401) {
                results.push({ name: 'CORS Configuration', status: 'success', message: '✅ CORS is properly configured' });
            } else {
                results.push({ name: 'CORS Configuration', status: 'success', message: '✅ CORS is properly configured' });
            }
        } catch (error) {
            results.push({ name: 'CORS Configuration', status: 'error', message: `❌ ${error.message}` });
        }

        // Test 3: API Response Format
        try {
            const response = await fetch(`${API_BASE_URL}/users/me`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();

            if (data && typeof data === 'object') {
                results.push({ name: 'API Response Format', status: 'success', message: '✅ API returns JSON correctly' });
            } else {
                results.push({ name: 'API Response Format', status: 'error', message: '❌ Invalid API response format' });
            }
        } catch (error) {
            results.push({ name: 'API Response Format', status: 'error', message: `❌ ${error.message}` });
        }

        setTestResults(results);
        setLoading(false);
    };

    useEffect(() => {
        runTests();
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>🔌 Frontend-Backend Connection Test</h1>

            <div style={{ marginBottom: '20px' }}>
                <p><strong>API Base URL:</strong> {API_BASE_URL}</p>
            </div>

            <button
                onClick={runTests}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginBottom: '20px',
                }}
            >
                {loading ? 'Running Tests...' : 'Run Connection Tests'}
            </button>

            <div>
                {testResults.length === 0 ? (
                    <p>Loading tests...</p>
                ) : (
                    testResults.map((result, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '15px',
                                marginBottom: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                backgroundColor: result.status === 'success' ? '#d4edda' : '#f8d7da',
                                borderColor: result.status === 'success' ? '#c3e6cb' : '#f5c6cb',
                            }}
                        >
                            <h3 style={{ margin: '0 0 10px 0' }}>{result.name}</h3>
                            <p style={{ margin: 0 }}>{result.message}</p>
                        </div>
                    ))
                )}
            </div>

            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '4px' }}>
                <h3>📝 Next Steps:</h3>
                <ul>
                    <li>If all tests pass ✅: Your frontend-backend connection is working!</li>
                    <li>If CORS test fails ❌: Check your backend CORS configuration</li>
                    <li>If Health Check fails ❌: Make sure backend is running on port 3000</li>
                </ul>
            </div>
        </div>
    );
}
