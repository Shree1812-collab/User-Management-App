# User Management System

A full-stack user management application built with React + Vite on the frontend and Node.js/Express on the backend.

## Project Structure

```
User-Management/
├── frontend/          # React + Vite application (deployed on Vercel)
└── backend/           # Node.js + Express REST API
```

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React, Vite, JavaScript |
| Backend   | Node.js, Express        |
| Database  | MongoDB (Mongoose)      |
| Deployment | Vercel (frontend only) |

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB instance (local or Atlas)

###  Git Repository

https://github.com/Shree1812-collab/User-Management-App

### Run Backend

```bash
cd backend
npm install
npm start
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Deployment

The **frontend** is deployed on [https://user-management-8jfp3v42y-shree1812-collabs-projects.vercel.app/](https://vercel.com). The backend runs separately and must be hosted independently (e.g., Railway, Render, or a VPS).

Make sure the frontend's API base URL points to your deployed backend URL via environment variables.

## Environment Variables

See `frontend/README.md` and `backend/README.md` for environment variable details.
