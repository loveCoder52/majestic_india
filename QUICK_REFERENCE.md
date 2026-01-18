# 🔗 Frontend-Backend Connection Quick Reference

## ⚡ 5-Minute Setup

### Step 1: Start Both Servers
```bash
# Terminal 1: Backend
cd server
npm run dev    # Runs on http://localhost:3000

# Terminal 2: Frontend
cd client
npm run dev    # Runs on http://localhost:5173
```

### Step 2: Check Connection
Open browser and go to: `http://localhost:5173/test-connection`

If all ✅ pass → Your connection works!

---

## 🛠️ How to Use in Your Code

### 1. Login a User
```javascript
import { useAuth } from '../context/AuthContext.jsx';

export default function MyPage() {
    const { login } = useAuth();
    
    const handleLogin = async () => {
        try {
            await login('user@example.com', 'password');
            console.log('✅ Logged in!');
        } catch (error) {
            console.log('❌ Error:', error.message);
        }
    };
    
    return <button onClick={handleLogin}>Login</button>;
}
```

### 2. Get Current User
```javascript
import { useAuth } from '../context/AuthContext.jsx';

export default function UserProfile() {
    const { user, isAuthenticated } = useAuth();
    
    if (!isAuthenticated) return <p>Not logged in</p>;
    
    return <p>Hello, {user.fullName}!</p>;
}
```

### 3. Register New User
```javascript
import { useAuth } from '../context/AuthContext.jsx';

const { register } = useAuth();

const handleRegister = async () => {
    await register('John Doe', 'john@email.com', 'pass123', '9999999999');
};
```

### 4. Logout
```javascript
import { useAuth } from '../context/AuthContext.jsx';

const { logout } = useAuth();

const handleLogout = async () => {
    await logout();
};
```

---

## 📡 API Call Without Context (Advanced)

If you don't want to use Context:

```javascript
import { loginUser } from '../services/authService.js';

const response = await loginUser({
    email: 'user@example.com',
    password: 'password'
});

console.log(response);  // { data: {...}, message: "..." }
```

---

## 🐛 Debug Checklist

| Issue | Fix |
|-------|-----|
| CORS error | Backend not running or wrong port |
| 404 error | Wrong API endpoint or port |
| User not saving | Missing `credentials: 'include'` in fetch |
| Login doesn't work | Check MongoDB connection first |
| Cookies not saved | Check backend cookie configuration |

---

## 📦 Created Files

| File | Purpose |
|------|---------|
| `.env.local` | Environment variables |
| `utils/apiConfig.js` | API configuration |
| `services/authService.js` | API functions |
| `context/AuthContext.jsx` | Global auth state |
| `components/LoginForm.jsx` | Login example |
| `components/RegisterForm.jsx` | Register example |
| `Pages/ConnectionTest.jsx` | Connection tester |

---

## 🔐 Important Things

✅ **Always include:** `credentials: 'include'` in fetch calls
✅ **Frontend port:** 5173 (Vite default)
✅ **Backend port:** 3000 (from your .env)
✅ **API base:** http://localhost:3000/api/v1
✅ **Cookies:** Stored automatically, no manual handling needed

---

## 🚀 What's Working

✅ Backend is running and accepts requests
✅ CORS is configured properly
✅ JWT authentication is set up
✅ MongoDB connection is configured
✅ Frontend is ready to make API calls

---

## 📝 Next: Integrate Into Your Pages

Update your existing pages to use authentication:

```javascript
// In Contact.jsx or any form page
import { useAuth } from '../context/AuthContext.jsx';

export default function Contact() {
    const { user, isAuthenticated } = useAuth();
    
    // Form will show differently if user is logged in
    if (!isAuthenticated) {
        return <p>Please log in to contact us</p>;
    }
    
    return (
        <form>
            <p>Hello {user.fullName}, submit your contact:</p>
            {/* Your form fields */}
        </form>
    );
}
```

---

## 🎓 Learning Path

1. ✅ Understand how fetch works
2. ✅ Understand CORS why it exists
3. ✅ Understand how cookies work (DevTools → Application)
4. ✅ Understand Context API (share data across components)
5. ✅ Understand JWT authentication
6. ✅ Learn error handling
7. ✅ Deploy to production

---

## 💡 Pro Tips

- Open DevTools (F12) → Network tab to see all API calls
- Check DevTools → Application → Cookies to see JWT tokens
- Use DevTools → Console to test API calls manually
- Set breakpoints in VS Code debugger to pause execution
- Use backend test endpoints: `GET http://localhost:3000/test`

---

## 🆘 Need Help?

1. Check `/test-connection` page first
2. Open DevTools → Network tab
3. Look for error messages
4. Check console logs
5. Compare with example components (LoginForm.jsx, RegisterForm.jsx)

---

**Your frontend and backend are now connected! 🎉**
