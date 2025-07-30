# THRIFTY-AI

This repository contains two full-stack projects built for real-time interaction and backend API development, each demonstrating different key technologies.

---

## 📦 Projects Overview

### 1. `chat-app/` - Real-Time Chat with Sentiment Analysis

**Description**:  
A live global chat application with sentiment detection built using:

- **Backend**: Node.js + Express + Socket.IO
- **Frontend**: React (TypeScript) + TailwindCSS
- **Functionality**:
  - Users join chat with a name
  - Send and receive messages in real time
  - Sentiment (`positive`, `neutral`, `negative`) is updated asynchronously after sending

> Sentiment analysis is simulated using simple keyword rules and a delay.

---

### 2. `notes-api/` - Notes API with MongoDB

**Description**:  
A RESTful API for managing notes with persistent storage using **MongoDB**.

- **Backend**: Node.js + Express + MongoDB
- **Features**:
  - Create, Read, Update, Delete (CRUD) operations for notes
  - MongoDB for storage and data persistence

> Also includes `task1.js`, which is the initial logic or setup file related to the first development task in this project.

---

## 🧪 Tech Stack Summary

| Feature         | Chat App               | Notes API                  |
|------------------|------------------------|-----------------------------|
| Frontend         | React + TypeScript     | N/A                         |
| Backend          | Express + Socket.IO    | Express + MongoDB           |
| Communication    | REST + WebSocket       | REST API only               |
| Database         | In-Memory (Temp)       | MongoDB                     |

---

## 🚀 Getting Started

### For `chat-app/`:
```bash
cd chat-app

# Start backend
cd backend
yarn install
yarn dev

# Start frontend
cd ../frontend
yarn install
yarn dev
