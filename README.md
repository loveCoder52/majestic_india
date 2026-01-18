# 🇮🇳 Majestic India - Full Stack Web Application

A complete full-stack web application with user authentication, properly connected frontend and backend, ready for production.

## 📚 **START HERE →** [README_START_HERE.md](./README_START_HERE.md)

This file contains navigation for all documentation and guides.

---

## 🚀 Features

✅ User Registration & Login  
✅ JWT-based Authentication  
✅ Secure Cookie Sessions  
✅ Frontend-Backend Connection (CORS configured)  
✅ Global Auth State Management (React Context)  
✅ Protected API Endpoints  
✅ Error Handling & Validation  
✅ Production-ready Code  

---

## 📖 Documentation Index

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **[README_START_HERE.md](./README_START_HERE.md)** | Navigation hub & getting started | 5 min |
| **[SETUP_SUMMARY.md](./SETUP_SUMMARY.md)** | What was created & how to use it | 5 min |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | Copy-paste code examples | 3 min |
| **[FRONTEND_BACKEND_GUIDE.md](./FRONTEND_BACKEND_GUIDE.md)** | Complete detailed guide (10 sections) | 20 min |
| **[ARCHITECTURE_DIAGRAMS.md](./ARCHITECTURE_DIAGRAMS.md)** | Visual diagrams & architecture | 10 min |
| **[PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)** | Deployment checklist | 15 min |
| **[COMPLETE_FILES_CREATED.md](./COMPLETE_FILES_CREATED.md)** | All files created & what they do | 5 min |

---

## 🎯 Quick Start (5 minutes)

### 1. Start Both Servers

```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
cd client
npm run dev
```

### 2. Test Connection

Open browser: `http://localhost:5173/test-connection`

### 3. Try Login/Register

Use the example forms or create a test account

---

## 📁 Project Structure

```
Majestic_India/
├── 📚 Documentation (start with README_START_HERE.md)
│   ├── README_START_HERE.md
│   ├── SETUP_SUMMARY.md
│   ├── QUICK_REFERENCE.md
│   ├── FRONTEND_BACKEND_GUIDE.md
│   ├── ARCHITECTURE_DIAGRAMS.md
│   ├── PRODUCTION_CHECKLIST.md
│   └── COMPLETE_FILES_CREATED.md
│
├── server/                      # Node.js + Express Backend
│   ├── src/
│   │   ├── index.js             # Entry point
│   │   ├── app.js               # Express app with CORS
│   │   ├── controllers/
│   │   │   └── user.controller.js
│   │   ├── routes/
│   │   │   └── user.router.js
│   │   ├── models/
│   │   │   └── user.model.js
│   │   ├── middlewears/
│   │   │   └── auth.middleware.js
│   │   ├── db/
│   │   │   └── index.js         # MongoDB connection
│   │   └── utils/
│   ├── package.json
│   └── .env                     # Configuration
│
├── client/                      # React + Vite Frontend
│   ├── src/
│   │   ├── App.jsx              # Main app (with AuthProvider)
│   │   ├── main.jsx             # Entry point
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js   # ✨ NEW: API functions
│   │   │   └── examples.js      # ✨ NEW: API patterns
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # ✨ NEW: Global auth state
│   │   │
│   │   ├── utils/
│   │   │   └── apiConfig.js     # ✨ NEW: API config
│   │   │
│   │   ├── components/
│   │   │   ├── LoginForm.jsx    # ✨ NEW: Login example
│   │   │   ├── RegisterForm.jsx # ✨ NEW: Register example
│   │   │   └── Header.jsx
│   │   │
│   │   └── Pages/
│   │       ├── ConnectionTest.jsx   # ✨ NEW: Connection tester
│   │       ├── ContactExample.jsx   # ✨ NEW: Integration example
│   │       └── (other pages)
│   │
│   ├── .env.local               # ✨ NEW: Frontend config
│   └── package.json
│
└── package.json                 # Root package.json
```

**✨ = Files created/modified for backend connection**

---

## 🔌 Connection Status

✅ **Backend & Frontend Connected**  
✅ **CORS Properly Configured**  
✅ **JWT Authentication Working**  
✅ **Cookie Management Enabled**  
✅ **Global State Management Setup**  
✅ **Error Handling Implemented**  
✅ **Production Ready**  

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt, CORS, httpOnly cookies

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS
- **State:** React Context API
- **API:** Fetch API with async/await

---

## 🚀 Deployment Ready

All configuration for production is documented in:
- [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

Includes:
- Environment variable setup
- Security configurations
- Deployment options (Railway, Render, Vercel, Netlify)
- SSL/HTTPS setup
- Monitoring & maintenance
- Rollback procedures

---

## 📋 Setup Checklist

- [x] Backend API created (Express)
- [x] Frontend created (React)
- [x] Database connected (MongoDB)
- [x] CORS configured properly
- [x] JWT authentication implemented
- [x] Frontend-Backend connection established ← **YOU ARE HERE**
- [x] Global state management setup
- [x] Example components created
- [x] Connection testing page added
- [x] Complete documentation provided
- [ ] Production deployment (follow PRODUCTION_CHECKLIST.md)

---

## 💡 Next Steps

### Immediate (Today)
1. Read [README_START_HERE.md](./README_START_HERE.md)
2. Visit `http://localhost:5173/test-connection`
3. Try registering a test user
4. Try logging in

### Soon (This Week)
1. Read [FRONTEND_BACKEND_GUIDE.md](./FRONTEND_BACKEND_GUIDE.md)
2. Integrate authentication into your pages
3. Customize forms to match your design
4. Test thoroughly

### Before Production
1. Follow [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)
2. Set up monitoring
3. Configure domains & SSL
4. Test on production environment

---

## 🆘 Help & Troubleshooting

### Quick Fixes
- **CORS Error?** → Check [QUICK_REFERENCE.md](./QUICK_REFERENCE.md#-debug-checklist)
- **Connection fails?** → Visit `/test-connection` page
- **User not staying logged in?** → Check [FRONTEND_BACKEND_GUIDE.md](./FRONTEND_BACKEND_GUIDE.md#10-troubleshooting)

### Complete Guide
See [FRONTEND_BACKEND_GUIDE.md](./FRONTEND_BACKEND_GUIDE.md#10-troubleshooting) for comprehensive troubleshooting

---

## 📞 Key Files to Know

**Backend:**
- `server/src/app.js` - CORS configured here
- `server/src/controllers/user.controller.js` - Login/register logic
- `server/.env` - Backend configuration

**Frontend:**
- `client/src/context/AuthContext.jsx` - Global auth state
- `client/src/services/authService.js` - API calls
- `client/.env.local` - Frontend configuration
- `client/src/App.jsx` - Auth provider wrapper

---

## 📝 Notes for Developers

1. **Before touching code:** Read [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)
2. **When integrating auth:** Copy from [LoginForm.jsx](./client/src/components/LoginForm.jsx)
3. **Adding new API calls:** Use patterns from [examples.js](./client/src/services/examples.js)
4. **Going to production:** Follow [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

---

## ✨ What's Different From Before?

**Previously:** Frontend and backend were separate, no connection  
**Now:** 
- ✅ Full frontend-backend integration
- ✅ Secure authentication system
- ✅ Global state management
- ✅ API service layer
- ✅ Error handling
- ✅ Production-ready code
- ✅ Complete documentation

---

## 🎓 Learning Resources Included

- Complete architecture diagrams
- Real-world code examples
- API pattern demonstrations
- Integration examples
- Troubleshooting guides
- Deployment instructions
- Security best practices

---

## 📊 Connection Diagram

```
Frontend (React)        ←→ Backend (Express)  ←→ Database (MongoDB)
:5173                       :3000                 Atlas/Local
├── LoginForm              ├── /login
├── AuthContext      CORS  ├── /register
└── useAuth hook ────────→ ├── /logout
        ↓ credentials      └── /me (protected)
    Cookies stored            ↓ JWT verified
        ↓                  MongoDB Query
   Stay logged in            ↓ Response
```

---

## 🎉 You're All Set!

Your frontend and backend are **fully connected and production-ready**.

**Next:** Read [README_START_HERE.md](./README_START_HERE.md) to navigate all documentation.

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Backend
   cd server
   npm install
   cd ..

   # Frontend
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory:
   ```bash
   cd server
   cp env.example .env
   ```

   Edit `server/.env` with your configuration:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017
   ACCESS_TOKEN_SECRET=your-super-secret-access-token-key-here
   ACCESS_TOKEN_EXPIRY=15m
   REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key-here
   REFRESH_TOKEN_EXPIRY=7d
   CORS_ORIGIN=http://localhost:5000,http://localhost:5173
   ```

   **Important:** Replace the token secrets with strong, random strings.

4. **Start MongoDB:**
   - Make sure MongoDB is running on your system
   - Or use MongoDB Atlas connection string in `MONGO_URI`

## 🚀 Running the Application

### Development Mode (Both Server and Client)

Run both backend and frontend concurrently:
```bash
npm run dev
```

### Run Separately

**Backend only:**
```bash
npm run dev:server
# or
cd server
npm run dev
```

**Frontend only:**
```bash
npm run dev:client
# or
cd client
npm run dev
```

### Production Build

Build the frontend:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🌐 Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Test Endpoint:** http://localhost:5000/test

### MongoDB / `MONGO_URI` (Troubleshooting)

- For **local MongoDB** use a URI like `mongodb://127.0.0.1:27017/<dbname>`.
- For **MongoDB Atlas** use the provided connection string (usually starts with `mongodb+srv://`). Replace the `<username>`, `<password>` and `<dbname>` placeholders.
- If you see errors like `querySrv ENOTFOUND _mongodb._tcp.<cluster>.mongodb.net`, ensure:
  - Your DNS can resolve SRV records, and
  - The Atlas cluster allows your IP (add it to IP Access List in Atlas or use `0.0.0.0/0` temporarily for testing).
- After adjusting `.env` in `server/`, restart the server: `npm run dev:server` or `npm run dev` at project root.

## 📡 API Endpoints

### Authentication

- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login user
- `POST /api/v1/users/logout` - Logout user (requires auth)
- `GET /api/v1/users/me` - Get current user (requires auth)

### Request/Response Examples

**Register:**
```json
POST /api/v1/users/register
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

**Login:**
```json
POST /api/v1/users/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT tokens for authentication
- HTTP-only cookies for token storage
- CORS configuration
- Input validation

## 📝 Notes

- The frontend uses Vite proxy to communicate with the backend during development
- Cookies are set with `httpOnly` flag for security
- Make sure to use strong, unique secrets in production

## 👥 Authors

- Love Sharma
- Anubhav Yadav

## 📄 License

ISC
