# Advanced Social Media Platform

A modern full-stack social media platform built with the MERN stack, featuring authentication, real-time communication, notifications, user profiles, and social interactions.

## Features

* User Authentication & Authorization
* User Profiles
* Create, Edit, and Delete Posts
* Like and Comment System
* Real-Time Notifications
* Real-Time Chat & Messaging
* Responsive Modern UI
* Dark/Light Theme Support
* Protected Routes
* Socket.IO Integration
* RESTful API Architecture

## Tech Stack

### Frontend

* React.js
* React Router
* Context API
* Tailwind CSS
* Axios
* Socket.IO Client
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO

## Project Structure

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── routes/
│   ├── services/
│   └── assets/

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
└── config/
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ShashankWorld/Advanced-Social-Media-Platform.git
cd Advanced-Social-Media-Platform
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

## Run Application

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
```

## Future Enhancements

* Video Calling
* Story Feature
* AI Content Recommendations
* Group Chats
* Post Sharing
* Media Compression
* Advanced Search
* Admin Dashboard

## Screenshots

Add project screenshots here after deployment.

## Author

**Shashank Shekhar**

GitHub: https://github.com/ShashankWorld

## License

This project is licensed under the MIT License.
