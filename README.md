# Unchay Task - MERN Project

This README provides instructions for setting up and running both the server and client components of this MERN stack application.

## Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Project Structure

```
Unchay_task/
├── client/         # React frontend
└── server/         # Node.js/Express backend
```

## Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/unchay_db
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev
   # or
   yarn dev

   # Production mode
   npm start
   # or
   yarn start
   ```

## Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the client application:
   ```bash
   npm start
   # or
   yarn start
   ```

4. The application should open automatically in your default browser at `http://localhost:3000`

## Running Both Simultaneously

You can use the [concurrently](https://www.npmjs.com/package/concurrently) package to run both server and client with a single command.

1. Install concurrently in the root directory:
   ```bash
   npm install concurrently --save-dev
   # or
   yarn add concurrently --dev
   ```

2. Add the following script to your root `package.json`:
   ```json
   "scripts": {
     "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm start\""
   }
   ```

3. Run both with:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Additional Notes

- Make sure MongoDB is running if you're using a local database
- Check the server console for any connection errors
- The API will be available at `http://localhost:5000`