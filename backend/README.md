# Backend — User Management

Node.js + Express REST API for the User Management system.

## Tech Stack

- **Node.js** — Runtime
- **Express** — Web framework
- **Mongoose** — MongoDB ODM
- **dotenv** — Environment configuration

## Project Structure

```
backend/
├── APIs/
│   └── UserApi.js       # User route handlers
├── models/
│   └── UserModel.js     # Mongoose user schema
├── node_modules/
├── .env
├── package.json
├── req.http             # HTTP request test file
└── server.js            # Entry point
```

## Getting Started

### Install Dependencies

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/user-management
```

For MongoDB Atlas, use your connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/user-management
```

### Run in Development

```bash
npm run dev
```

Or with Node directly:

```bash
node server.js
```

The server starts on [http://localhost:5000](http://localhost:5000).

## API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/users`     | Get all users      |
| GET    | `/api/users/:id` | Get user by ID     |
| POST   | `/api/users`     | Create a new user  |
| PUT    | `/api/users/:id` | Update a user      |
| DELETE | `/api/users/:id` | Delete a user      |

## CORS Configuration

Since the frontend is deployed on Vercel, configure CORS in `server.js` to allow requests from your Vercel domain:

```js
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:5173', 'https://your-app.vercel.app']
}));
```
