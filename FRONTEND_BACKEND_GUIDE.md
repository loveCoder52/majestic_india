# 🚀 Complete Frontend-Backend Connection Guide

## Overview
This guide explains how to properly connect your React frontend (running on port 5173) to your Node.js + Express backend (running on port 3000).

---

## 📋 Table of Contents
1. [Project Setup](#project-setup)
2. [CORS Configuration](#cors-configuration)
3. [Environment Variables](#environment-variables)
4. [API Service Layer](#api-service-layer)
5. [State Management with Context API](#state-management)
6. [Using Authentication](#using-authentication)
7. [Error Handling](#error-handling)
8. [Testing Connection](#testing-connection)
9. [Production Deployment](#production-deployment)
10. [Troubleshooting](#troubleshooting)

---

## 1. Project Setup {#project-setup}

### Your Current Architecture:

**Backend (Port 3000):**
- Framework: Express.js
- Database: MongoDB
- API Routes: `/api/v1/users/*`
- Authentication: JWT (stored in cookies)

**Frontend (Port 5173):**
- Framework: React with Vite
- Routing: React Router v7
- Styling: Tailwind CSS

### File Structure Created:
```
client/
├── src/
│   ├── services/
│   │   └── authService.js          ← API calls to backend
│   ├── context/
│   │   └── AuthContext.jsx         ← Global auth state
│   ├── components/
│   │   ├── LoginForm.jsx           ← Login example
│   │   ├── RegisterForm.jsx        ← Register example
│   │   └── Header.jsx
│   ├── Pages/
│   │   ├── ConnectionTest.jsx      ← Connection tester
│   │   └── ... (existing pages)
│   ├── utils/
│   │   └── apiConfig.js            ← API configuration
│   └── App.jsx
├── .env.local                       ← Environment variables
└── package.json
```

---

## 2. CORS Configuration {#cors-configuration}

### What is CORS?
CORS (Cross-Origin Resource Sharing) is a security feature that allows your frontend to make requests to your backend.

### Your Backend CORS Setup (Already Configured):

In `server/src/app.js`:
```javascript
const allowedOrigins = (process.env.CORS_ORIGIN?.split(",") ?? [
    "http://localhost:5000",
    "http://localhost:5173",
]).map((origin) => origin.trim());

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,  // ✅ IMPORTANT: Allows cookies
}));
```

### What This Means:
- ✅ Your frontend on `http://localhost:5173` is **allowed**
- ✅ Cookies are **allowed** (needed for JWT authentication)
- ✅ JSON requests/responses are **supported**

### For Production:
Update your `.env` file:
```
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
```

---

## 3. Environment Variables {#environment-variables}

### Frontend Environment Variables (.env.local)

Create `client/.env.local`:
```
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_BACKEND_URL=http://localhost:3000
```

**Why?**
- `VITE_API_BASE_URL`: Used for all API calls
- `VITE_BACKEND_URL`: Used for images, files, etc.
- `VITE_` prefix: Required for Vite to expose variables

**In Production:**
```
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1
VITE_BACKEND_URL=https://api.yourdomain.com
```

### Accessing Environment Variables in Code:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL); // http://localhost:3000/api/v1
```

---

## 4. API Service Layer {#api-service-layer}

### What is a Service Layer?
A service layer is a file that handles all API calls. This keeps your code organized and reusable.

### File: `client/src/services/authService.js`

**Key Functions:**

#### Register User
```javascript
const response = await registerUser({
    fullName: 'John Doe',
    email: 'john@example.com',
    password: 'secure123',
    phone: '+91-9999999999'
});
```

#### Login User
```javascript
const response = await loginUser({
    email: 'john@example.com',
    password: 'secure123'
});
```

#### Logout User
```javascript
await logoutUser();
```

#### Get Current User
```javascript
const response = await getCurrentUser();
if (response?.data) {
    console.log('User:', response.data);
}
```

### Important: credentials: 'include'
Every fetch request includes:
```javascript
credentials: 'include'  // This sends cookies with every request
```

**Why?** Your backend uses JWT stored in cookies. Without this line, cookies won't be sent.

---

## 5. State Management with Context API {#state-management}

### What is Context API?
A way to manage global state (like "is user logged in?") without prop drilling.

### File: `client/src/context/AuthContext.jsx`

### What It Provides:
```javascript
const { 
    user,              // Current user object
    isLoading,         // Loading state
    error,             // Error messages
    login,             // Login function
    register,          // Register function
    logout,            // Logout function
    isAuthenticated    // Boolean: is user logged in?
} = useAuth();
```

### How It Works:
1. When app loads, it checks if user is already logged in
2. Stores user data globally
3. Updates when user logs in/out
4. Automatically clears on logout

---

## 6. Using Authentication {#using-authentication}

### Example 1: Login Form

File: `client/src/components/LoginForm.jsx`

```javascript
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginForm() {
    const { login, isLoading, error } = useAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // ✅ Login successful, user data is now in context
        } catch (err) {
            console.error(err.message);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            {/* Form inputs */}
        </form>
    );
}
```

### Example 2: Protected Component (Show User Name)

```javascript
import { useAuth } from '../context/AuthContext.jsx';

export default function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    
    if (!isAuthenticated) {
        return <div>Please log in</div>;
    }
    
    return (
        <div>
            <p>Welcome, {user.fullName}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
```

### Example 3: Make API Calls

```javascript
import { loginUser } from '../services/authService.js';

async function handleLogin() {
    try {
        const response = await loginUser({
            email: 'user@example.com',
            password: 'password123'
        });
        console.log('Response:', response); // {data: {...}, message: "..."}
    } catch (error) {
        console.error('Error:', error.message);
    }
}
```

---

## 7. Error Handling {#error-handling}

### Backend Error Response Format:
```javascript
{
    statusCode: 400,
    success: false,
    message: "Email and password are required",
    errors: []
}
```

### Frontend Error Handling:

```javascript
try {
    const response = await loginUser({ email, password });
    // Success
} catch (error) {
    // error.message = "Email and password are required"
    console.error(error.message);
}
```

### HTTP Status Codes Your Backend Uses:
- `200`: Success
- `201`: Created (registration success)
- `400`: Bad request (missing fields)
- `401`: Unauthorized (wrong password)
- `409`: Conflict (email already exists)
- `500`: Server error

---

## 8. Testing Connection {#testing-connection}

### Method 1: Use Built-in Test Page

Navigate to: `http://localhost:5173/test-connection`

This page automatically tests:
- ✅ Backend health check
- ✅ CORS configuration
- ✅ API response format

### Method 2: Use Browser DevTools

1. Open DevTools (F12)
2. Go to Console tab
3. Run:

```javascript
// Test 1: Health check
fetch('http://localhost:3000/test')
    .then(r => r.text())
    .then(console.log);

// Test 2: Login (will fail with 401 if not authenticated)
fetch('http://localhost:3000/api/v1/users/me', {
    credentials: 'include'
})
    .then(r => r.json())
    .then(console.log);
```

### Expected Outputs:

**Health Check Success:**
```
"app is working properly"
```

**Login Endpoint (Not Authenticated):**
```
{
    statusCode: 401,
    success: false,
    message: "Invalid access token",
    errors: []
}
```

### Method 3: Use Postman/Insomnia

1. Create POST request to `http://localhost:3000/api/v1/users/login`
2. Add header: `Content-Type: application/json`
3. Body:
```json
{
    "email": "test@example.com",
    "password": "testpassword"
}
```

---

## 9. Production Deployment {#production-deployment}

### Before Deploying:

#### 1. Update Backend Environment Variables
```
# .env (server folder)
MONGO_URI=<your_atlas_url>
PORT=3000
CORS_ORIGIN=https://yourdomain.com
NODE_ENV=production
```

#### 2. Update Frontend Environment Variables
```
# .env.production (client folder)
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1
VITE_BACKEND_URL=https://api.yourdomain.com
```

#### 3. Build Frontend
```bash
cd client
npm run build  # Creates dist/ folder
```

#### 4. Backend Deployment (Heroku/Railway/Render)
- Push to GitHub
- Connect to deployment platform
- Set environment variables
- Deploy

#### 5. Frontend Deployment (Vercel/Netlify)
- Push to GitHub
- Connect to Vercel/Netlify
- Set environment variables
- Deploy

---

## 10. Troubleshooting {#troubleshooting}

### Problem: CORS Error
**Error:** `Access to XMLHttpRequest has been blocked by CORS policy`

**Solutions:**
1. Check backend is running: `npm run dev` in server folder
2. Verify CORS_ORIGIN includes your frontend URL
3. Make sure `credentials: 'include'` is in your fetch calls

### Problem: 404 Not Found
**Error:** `Cannot POST /api/v1/users/register`

**Solutions:**
1. Check backend API routes exist
2. Verify API URL is correct: `http://localhost:3000/api/v1`
3. Check port number (3000 for backend)

### Problem: Cookies Not Saved
**Error:** Login works but user data doesn't persist

**Solutions:**
1. Add `credentials: 'include'` to fetch calls
2. Check backend cookie options in controller
3. Verify backend CORS has `credentials: true`

### Problem: MongoDB Connection Fails
**Error:** `MongoDB connection failed`

**Solutions:**
1. Check MongoDB Atlas cluster is running
2. Verify connection string in `.env`
3. Whitelist your IP in MongoDB Atlas network access
4. Check username and password

### Problem: Frontend Doesn't Load User on Page Refresh
**Why?** User data is not persistent

**Solution:** It will load once you log in. The `getCurrentUser()` call in `useEffect` will fetch it from backend.

---

## 🎯 Quick Start Checklist

- [ ] Backend running on port 3000 (`npm run dev` in server folder)
- [ ] Frontend running on port 5173 (`npm run dev` in client folder)
- [ ] `.env.local` created in client folder with API URLs
- [ ] `AuthProvider` wraps app in `App.jsx`
- [ ] Import `useAuth` hook in components
- [ ] Test connection at `/test-connection` page
- [ ] Create test user and verify login works
- [ ] Check browser cookies (DevTools → Application → Cookies)

---

## 📚 API Endpoints Summary

| Method | Endpoint | Auth | Body | Response |
|--------|----------|------|------|----------|
| POST | `/api/v1/users/register` | No | fullName, email, password, phone | User object |
| POST | `/api/v1/users/login` | No | email, password | User object |
| POST | `/api/v1/users/logout` | Yes | - | Success message |
| GET | `/api/v1/users/me` | Yes | - | User object |

---

## 🔐 Security Tips

1. **Never commit `.env` files** - Add to `.gitignore`
2. **Use HTTPS in production** - All connections should be encrypted
3. **Set secure cookie flags** - Already done in backend
4. **Validate input on backend** - Already implemented
5. **Use strong JWT secrets** - Change in production
6. **Limit CORS origins** - Only allow your domain
7. **Set httpOnly flag on cookies** - Already done (prevents XSS attacks)

---

## 📞 Common Questions

**Q: Do I need to restart the server after changing .env?**
A: Yes, restart with `npm run dev`

**Q: Can I use axios instead of fetch?**
A: Yes, install `npm install axios` and replace fetch calls

**Q: How do I send files (images)?**
A: Use FormData with `Content-Type: multipart/form-data`

**Q: How do I refresh tokens?**
A: Backend automatically handles it with refresh token in cookie

**Q: Can I run backend and frontend on same port?**
A: Not recommended for development. Backend handles /api/*, frontend handles everything else.

---

## 🚀 Next Steps

1. ✅ Test connection using `/test-connection` page
2. ✅ Try registering a new user
3. ✅ Try logging in
4. ✅ Check browser cookies (DevTools → Application)
5. ✅ Refresh page and verify user data persists
6. ✅ Integrate login/register into your Contact page
7. ✅ Deploy to production

---

Happy coding! 🎉
