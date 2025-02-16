require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('./middleware/authMiddleware'); // Import the auth middleware

const app = express();
app.use(express.json()); // Middleware for JSON parsing

// Connect to MongoDB Atlas
console.log('MongoDB URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/Lawyers', require('./routes/lawyerRoute'));
app.use('/api/auth', require('./routes/authRoute'));
 app.use('/api/user', require('./routes/userRoute')); // Comment or remove this line if not needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));