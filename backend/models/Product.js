const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt dates
});

module.exports = mongoose.model('Product', productSchema);