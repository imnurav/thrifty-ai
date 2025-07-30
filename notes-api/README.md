# 📝 Simple Notes API (Node.js + MongoDB + JWT)

A secure and lightweight RESTful API for managing personal notes. Built with:

- Node.js + Express
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Yarn for package management
- ES6 module syntax

---

## 📁 Project Structure

```
notes-api/
├── src/
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── note.js          # Mongoose Note schema
│   │   └── user.js          # Mongoose User schema
│   ├── routes/
│   │   ├── auth.js          # Signup & login routes
│   │   └── notes.js         # Create & retrieve notes (protected)
│   └── app.js               # Main entry point
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Install Dependencies

```bash
yarn
```

### 🧪 Create `.env` File

```env
MONGODB_URI=mongodb://localhost:27017/simple-notes
JWT_SECRET=your_jwt_secret
```

### ▶️ Run the Server

```bash
node src/app.js
```

Server will run at: [http://localhost:3000](http://localhost:3000)

---

## 📮 API Endpoints

> All `/notes` endpoints require authentication using a Bearer token.

---

### 🔐 Signup

```bash
curl --location 'http://localhost:3000/auth/signup' --header 'Content-Type: application/json' --data-raw '{"email":"test@example.com","password":"secret123"}'
```

---

### 🔑 Login

```bash
curl --location 'http://localhost:3000/auth/login' --header 'Content-Type: application/json' --data-raw '{"email":"test@example.com","password":"secret123"}'
```

#### ✅ Response

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

---

### 📝 Create a Note

```bash
curl --location 'http://localhost:3000/notes' --header 'Authorization: Bearer YOUR_JWT_TOKEN' --header 'Content-Type: application/json' --data '{"title":"My Note","content":"Some content"}'
```

---

### 📄 Get All Notes (for Authenticated User)

```bash
curl --location --request GET 'http://localhost:3000/notes' --header 'Authorization: Bearer YOUR_JWT_TOKEN' --header 'Content-Type: application/json'
```

---

## ✅ Features

- User registration and login
- JWT-based authentication
- Notes are private per user
- MongoDB for document storage
- Clean modular structure
- Modern JS (ES6 modules)

---

## 📝 Notes

- Ensure MongoDB is running locally before starting the app
- The token returned from `/auth/login` must be included in the `Authorization` header like:
  ```
  Authorization: Bearer <token>
  ```

---
