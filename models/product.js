const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection error');
        console.log(err);
    });

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