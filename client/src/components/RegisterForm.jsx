// src/components/RegisterForm.jsx
// Example: How to use registration in a form

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

export default function RegisterForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const { register, isLoading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await register(fullName, email, password, phone);
            setSuccess('Registration successful! ✅');
            setFullName('');
            setEmail('');
            setPassword('');
            setPhone('');
            console.log('User registered:', response.data);
        } catch (err) {
            setError(err.message || 'Registration failed');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Register</h2>

            {error && <div style={{ color: 'red', marginBottom: '10px' }}>❌ {error}</div>}
            {success && <div style={{ color: 'green', marginBottom: '10px' }}>✅ {success}</div>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
                    <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        placeholder="John Doe"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        placeholder="your@email.com"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone:</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        placeholder="+91-XXXXXXXXXX"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: isLoading ? '#ccc' : '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>

            <p style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
                💡 Tip: Use this form to test the backend connection
            </p>
        </div>
    );
}
