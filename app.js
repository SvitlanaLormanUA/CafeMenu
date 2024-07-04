const express = require('express');
const app = express();
const path = require('path');
const jsonData = require('./products.json');

//quotes
let teaQuote = "Після води, чай - найбільш споживаний напій на Землі.";
let coffeeQuote = "Для пиття використовуються два види кавових зерен: робуста і арабіка. Арабіка має нижчу кислотність" +  
"і м'якший смак, тоді як робуста більш кисла і гірка.";

//imgs
let teaImg = "/pictures/tea/teaImg.png";
let coffeeImg = "/pictures/coffee/coffeeImg.png";

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the tea page
app.get('/tea', (req, res) => {
    res.render('productItem',
        { item: jsonData.tea, 
        title: 'Tea',
        titleUA: 'ЧАЙ',
        img: teaImg,
        quote: teaQuote,
     });
});
app.get('/coffee', (req, res) => {
    res.render('productItem',
        { item: jsonData.coffee, 
        title: 'Coffee',
        titleUA: 'КАВА',
        img: coffeeImg,
        quote: coffeeQuote,
     });
});

// Route to render the home page
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
