const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing users (optional - comment out if you want to keep existing users)
    // await User.deleteMany({});
    // console.log('Cleared existing users');

    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('Created admin user');
    } else {
      console.log('Admin user already exists');
    }

    // Check if demo user already exists
    const userExists = await User.findOne({ email: 'user@example.com' });
    if (!userExists) {
      await User.create({
        name: 'Demo User',
        email: 'user@example.com',
        password: 'user123',
        role: 'user'
      });
      console.log('Created demo user');
    } else {
      console.log('Demo user already exists');
    }

    console.log('Users seeded successfully!');
    console.log('\nDemo Accounts:');
    console.log('Admin: admin@example.com / admin123');
    console.log('User: user@example.com / user123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();
