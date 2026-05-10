# BagStore - E-Commerce Platform

A modern, full-stack e-commerce application for selling bags and accessories, built with React, Node.js, Express, and MongoDB.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Clean, responsive design with smooth animations and transitions
- **User Authentication**: Secure registration and login with JWT tokens
- **Product Browsing**: Search, filter by category, and view featured products
- **Shopping Cart**: Add items, manage quantities, and checkout
- **Admin Dashboard**: Manage products, orders, and inventory
- **Password Strength Indicator**: Real-time feedback during registration
- **Mobile Responsive**: Fully functional on all device sizes

### Backend
- **RESTful API**: Well-structured endpoints for all operations
- **Secure Authentication**: JWT-based auth with bcrypt password hashing
- **Input Validation**: Comprehensive validation for all user inputs
- **Error Handling**: Detailed error messages and proper HTTP status codes
- **MongoDB Integration**: Efficient data storage with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- Tailwind CSS for styling
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bagstore
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
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

The frontend will run on `http://localhost:3000`

## 🔐 Demo Accounts

### Admin Account
- Email: `admin@example.com`
- Password: `admin123`

### User Account
- Email: `user@example.com`
- Password: `user123`

## 📝 Recent Improvements

### Backend Fixes
- ✅ Fixed registration hanging issue by adding proper `next()` callback in password hashing middleware
- ✅ Enhanced input validation with email format checking
- ✅ Improved error messages for better user feedback
- ✅ Added proper error handling for mongoose validation errors
- ✅ Normalized email addresses (lowercase, trimmed)

### Frontend Enhancements
- ✅ Modern, gradient-based UI design
- ✅ Password strength indicator with visual feedback
- ✅ Show/hide password toggle
- ✅ Loading states with animated spinners
- ✅ Better error display with icons
- ✅ Smooth animations and transitions
- ✅ Improved product cards with hover effects
- ✅ Enhanced navbar with user avatar
- ✅ Mobile-responsive navigation menu
- ✅ "Added to cart" confirmation feedback
- ✅ Auto-redirect when already logged in

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient theme
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions, fade-ins, and micro-interactions
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Responsive**: Mobile-first design that works on all screen sizes

## 📁 Project Structure

```
bagstore/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── orders.js
│   │   └── products.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected routes for authenticated users
- Admin-only routes for management functions
- Input sanitization and validation
- CORS configuration
- Environment variables for sensitive data

## 🚧 Future Enhancements

- [ ] Email verification for new accounts
- [ ] Password reset functionality
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Payment gateway integration
- [ ] Advanced search with filters
- [ ] Product recommendations
- [ ] Order history and invoices
- [ ] Multi-image product gallery

## 📄 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart (protected)
- `POST /api/cart` - Add to cart (protected)
- `PUT /api/cart/:id` - Update cart item (protected)
- `DELETE /api/cart/:id` - Remove from cart (protected)

### Orders
- `GET /api/orders` - Get user orders (protected)
- `POST /api/orders` - Create order (protected)
- `GET /api/orders/:id` - Get order details (protected)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please open an issue in the repository.

## 📜 License

This project is open source and available under the MIT License.
