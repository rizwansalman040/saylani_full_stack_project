require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Import your new routes here
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Mount the product routes to the /api/products URL path
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running live...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});