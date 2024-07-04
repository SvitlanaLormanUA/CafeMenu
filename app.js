const express = require('express');
const app = express();
const path = require('path');
const jsonData = require('./products.json');


// Serve static files from the 'public' directoryapp.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Route to render a random number
app.get('/tea', (req, res) => {
    res.render('tea', { tea: jsonData.tea });
});

// Route to render the home page
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
