# 🇮🇳 Majestic India

A full-stack web application with user authentication built with Express.js backend and React frontend.

## 🚀 Features

- User Registration
- User Login
- User Profile Management
- JWT-based Authentication
- Secure Cookie-based Session Management

## 📁 Project Structure

```
Majestic_India/
├── server/          # Backend (Express.js)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewears/
│   │   ├── utils/
│   │   ├── db/
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   └── env.example
├── client/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json     # Root package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)

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
