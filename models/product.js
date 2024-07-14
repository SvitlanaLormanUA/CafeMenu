const mongoose = require('mongoose');
    const productScema = new mongoose.Schema({
        category: {
           type: String,
           enum: ['tea', 'coffee', 'desserts', 'drinkElse', 'toEat', 'special']
        
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            min: 0
        },
        items: {
            type: String
        },
        description: {
            type: String
        },
        toWaiter: {
            type: String
        },
        icon: {
            type: String
        },
        allergens: {
            type: String
        },
        volume: {
            type: String,
        }

    });

const Product = mongoose.model('Product', productScema);



  module.exports = Product;