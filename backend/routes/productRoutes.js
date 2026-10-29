const express = require('express');
const router = express.Router();
const { 
    createProduct, 
    getProducts, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');

// Route for /api/products
router.route('/')
    .get(getProducts)     // User & Admin: Read all products
    .post(createProduct); // Admin: Create a product

// Route for /api/products/:id (targeting a specific product by its ID)
router.route('/:id')
    .put(updateProduct)    // Admin: Update a product
    .delete(deleteProduct); // Admin: Delete a product

module.exports = router;