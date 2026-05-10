const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: "Classic Leather Tote",
    description: "Elegant leather tote bag perfect for work or casual outings. Features multiple compartments and durable construction.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    category: "tote-bags",
    stock: 25,
    featured: true
  },
  {
    name: "Urban Backpack Pro",
    description: "Modern backpack with laptop compartment, USB charging port, and water-resistant material. Perfect for daily commute.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "backpacks",
    stock: 30,
    featured: true
  },
  {
    name: "Luxury Crossbody Bag",
    description: "Compact crossbody bag with adjustable strap. Ideal for hands-free convenience with a touch of elegance.",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    category: "crossbody",
    stock: 20,
    featured: true
  },
  {
    name: "Evening Clutch Gold",
    description: "Sophisticated gold clutch perfect for formal events. Features chain strap and secure magnetic closure.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    category: "clutches",
    stock: 15,
    featured: false
  },
  {
    name: "Designer Handbag Collection",
    description: "Premium designer handbag with signature hardware. Crafted from genuine leather with satin lining.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    category: "handbags",
    stock: 12,
    featured: true
  },
  {
    name: "Canvas Tote Eco-Friendly",
    description: "Sustainable canvas tote bag made from recycled materials. Spacious and perfect for shopping or beach trips.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500",
    category: "tote-bags",
    stock: 40,
    featured: false
  },
  {
    name: "Travel Backpack XL",
    description: "Extra large travel backpack with multiple compartments, padded straps, and TSA-friendly laptop section.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
    category: "backpacks",
    stock: 18,
    featured: false
  },
  {
    name: "Mini Crossbody Chic",
    description: "Trendy mini crossbody bag perfect for essentials. Features gold chain and quilted design.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=500",
    category: "crossbody",
    stock: 28,
    featured: false
  },
  {
    name: "Satin Evening Clutch",
    description: "Elegant satin clutch with crystal embellishments. Perfect for weddings and special occasions.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    category: "clutches",
    stock: 22,
    featured: false
  },
  {
    name: "Structured Handbag Black",
    description: "Classic structured handbag in timeless black. Features top handles and detachable shoulder strap.",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500",
    category: "handbags",
    stock: 16,
    featured: false
  },
  {
    name: "Beach Tote Striped",
    description: "Large striped beach tote with rope handles. Water-resistant lining and interior pockets.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    category: "tote-bags",
    stock: 35,
    featured: false
  },
  {
    name: "Student Backpack Classic",
    description: "Durable student backpack with padded laptop sleeve, multiple pockets, and ergonomic design.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=500",
    category: "backpacks",
    stock: 45,
    featured: false
  },
  {
    name: "Leather Crossbody Brown",
    description: "Genuine leather crossbody in rich brown tone. Adjustable strap and multiple card slots.",
    price: 72.99,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=500",
    category: "crossbody",
    stock: 19,
    featured: false
  },
  {
    name: "Metallic Clutch Silver",
    description: "Eye-catching metallic silver clutch with removable chain. Perfect for parties and nights out.",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
    category: "clutches",
    stock: 24,
    featured: false
  },
  {
    name: "Vintage Handbag Burgundy",
    description: "Vintage-inspired handbag in deep burgundy. Features gold hardware and kiss-lock closure.",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1590739225017-e513879c8e50?w=500",
    category: "handbags",
    stock: 14,
    featured: false
  },
  {
    name: "Minimalist Tote White",
    description: "Clean minimalist tote in crisp white. Perfect for modern aesthetics with spacious interior.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    category: "tote-bags",
    stock: 27,
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(products);
    console.log(`Added ${products.length} sample products`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
