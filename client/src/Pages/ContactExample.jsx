// Example: How to integrate authentication into your existing Contact page
// This shows a complete real-world example

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import '../style.css';  // Your existing styles

export default function Contact() {
    // Get auth state and functions
    const { user, isAuthenticated, login, register, logout, isLoading } = useAuth();
    
    // Form states
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [contactMessage, setContactMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    
    // Login form states
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    
    // Register form states
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPhone, setRegisterPhone] = useState('');
    
    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(loginEmail, loginPassword);
            setLoginEmail('');
            setLoginPassword('');
            setShowLoginForm(false);
            setSubmitStatus('✅ Logged in successfully!');
        } catch (error) {
            setSubmitStatus(`❌ Login failed: ${error.message}`);
        }
    };
    
    // Handle register
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(registerName, registerEmail, registerPassword, registerPhone);
            setRegisterName('');
            setRegisterEmail('');
            setRegisterPassword('');
            setRegisterPhone('');
            setShowRegisterForm(false);
            setSubmitStatus('✅ Registered successfully!');
        } catch (error) {
            setSubmitStatus(`❌ Registration failed: ${error.message}`);
        }
    };
    
    // Handle contact form submit
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        
        if (!isAuthenticated) {
            setSubmitStatus('❌ Please log in first');
            return;
        }
        
        try {
            // TODO: Create a contactService.js and add this function
            // For now, just show success message
            setSubmitStatus('✅ Your message has been sent!');
            setContactMessage('');
        } catch (error) {
            setSubmitStatus(`❌ Failed to send: ${error.message}`);
        }
    };
    
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            
            {/* Status Messages */}
            {submitStatus && (
                <div className={`status-message ${submitStatus.includes('✅') ? 'success' : 'error'}`}>
                    {submitStatus}
                </div>
            )}
            
            {/* If not authenticated, show login/register options */}
            {!isAuthenticated ? (
                <div className="auth-section">
                    <p>Please log in or register to contact us</p>
                    
                    <div className="auth-buttons">
                        <button 
                            onClick={() => {
                                setShowLoginForm(!showLoginForm);
                                setShowRegisterForm(false);
                            }}
                            className="btn-primary"
                        >
                            {showLoginForm ? 'Cancel' : 'Log In'}
                        </button>
                        
                        <button 
                            onClick={() => {
                                setShowRegisterForm(!showRegisterForm);
                                setShowLoginForm(false);
                            }}
                            className="btn-secondary"
                        >
                            {showRegisterForm ? 'Cancel' : 'Register'}
                        </button>
                    </div>
                    
                    {/* Login Form */}
                    {showLoginForm && (
                        <form onSubmit={handleLogin} className="form-section">
                            <h3>Login</h3>
                            <input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                    )}
                    
                    {/* Register Form */}
                    {showRegisterForm && (
                        <form onSubmit={handleRegister} className="form-section">
                            <h3>Register</h3>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={registerName}
                                onChange={(e) => setRegisterName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={registerPhone}
                                onChange={(e) => setRegisterPhone(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>
                        </form>
                    )}
                </div>
            ) : (
                // If authenticated, show contact form and user info
                <div className="contact-section">
                    <div className="user-info">
                        <p>Welcome, <strong>{user.fullName}</strong>!</p>
                        <p>Email: {user.email}</p>
                        <button onClick={logout} className="btn-logout">
                            Logout
                        </button>
                    </div>
                    
                    <form onSubmit={handleContactSubmit} className="contact-form">
                        <h3>Send us a message</h3>
                        
                        <textarea
                            placeholder="Your message..."
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            rows="5"
                            required
                        />
                        
                        <button type="submit" className="btn-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

/*
CSS Styles to add to your style.css:

.contact-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
}

.auth-section, .contact-section {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.auth-buttons {
    display: flex;
    gap: 10px;
    margin: 20px 0;
}

.btn-primary, .btn-secondary, .btn-submit, .btn-logout {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-secondary {
    background-color: #28a745;
    color: white;
}

.btn-logout {
    background-color: #dc3545;
    color: white;
    padding: 8px 16px;
    font-size: 13px;
}

.form-section {
    border: 1px solid #eee;
    padding: 15px;
    margin-top: 15px;
    border-radius: 4px;
}

.form-section input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

.form-section button,
.contact-form button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-section button:disabled,
.contact-form button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.status-message {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
}

.status-message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.status-message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.user-info {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-form {
    margin-top: 20px;
}
*/
