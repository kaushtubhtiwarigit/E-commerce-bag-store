# E-Commerce Application

This is a full-stack e-commerce application built with a Node.js backend and a React frontend. It provides features for user authentication, product browsing, cart management, and order processing.

## Features

### Backend
- **Authentication**: User registration, login, and protected routes.
- **Product Management**: CRUD operations for products.
- **Cart Management**: Add, remove, and update items in the cart.
- **Order Processing**: Place orders and view order history.

### Frontend
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.
- **Product Browsing**: View product listings and details.
- **Cart Management**: Add and remove items from the cart.
- **Authentication**: User login and registration.
- **Admin Dashboard**: Manage products and orders.

## Project Structure

### Backend
- `server.js`: Entry point for the backend server.
- `config/`: Configuration files (e.g., database connection).
- `controllers/`: Handles business logic for various features.
- `middleware/`: Custom middleware (e.g., authentication).
- `models/`: Database models for MongoDB.
- `routes/`: API routes for different resources.

### Frontend
- `src/`: Contains the main React application.
  - `components/`: Reusable UI components.
  - `context/`: Context API for state management.
  - `pages/`: Page components for different views.
- `public/`: Static assets.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Open your browser and navigate to the frontend development server (e.g., `http://localhost:5173`).
2. Use the application to browse products, manage your cart, and place orders.

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

### Frontend
- React
- Vite
- Tailwind CSS
