# Redux Blogg Project

A full-stack blog application built with **Next.js**, **Redux Toolkit**, **Express.js**, and **MongoDB** for learning Redux state management.

## 🚀 Features

- ✅ Create new blog posts
- ✅ View all posts
- ✅ Redux Toolkit for state management
- ✅ MongoDB for data persistence
- ✅ RESTful API with Express.js
- ✅ TypeScript support

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- Redux Toolkit
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/haamidh/reduxPractice1.git
cd reduxPractice1
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/redux1
PORT=5000
```

Start the backend server:
```bash
npm run dev
```
The backend will run on http://localhost:5000

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
The frontend will run on http://localhost:3000

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post |

## 📁 Project Structure

```
reduxPractice1/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── lib/
│   │       ├── features/
│   │       │   └── posts/
│   │       │       └── postSlice.ts
│   │       ├── hooks.ts
│   │       ├── store.ts
│   │       └── StoreProvider.tsx
│   └── package.json
└── README.md
```

## 🚦 Usage

1. Start MongoDB service
2. Run the backend server: `cd backend && npm run dev`
3. Run the frontend: `cd frontend && npm run dev`
4. Open http://localhost:3000 in your browser
5. Create and view blog posts!

## 🎯 Learning Objectives

This project demonstrates:
- Redux Toolkit setup and configuration
- Async thunks for API calls
- TypeScript with Redux
- Next.js with Redux integration
- Express.js REST API
- MongoDB with Mongoose

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).