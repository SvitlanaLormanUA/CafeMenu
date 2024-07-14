const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product'); // Виправлення на правильний шлях

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection error');
        console.log(err);
    });

let teaQuote = "Після води, чай - найбільш споживаний напій на Землі.";
let coffeeQuote = "Для пиття використовуються два види кавових зерен: робуста і арабіка. Арабіка має нижчу кислотність" +
    "і м'якший смак, тоді як робуста більш кисла і гірка.";
let dessertsQuote = "Шоколад, набагато довше за цукор, був використаний як валюта в стародавніх цивілізаціях. Майя використовували какао-боби" +
    "в обміні між собою, а Ацтеки вважали шоколад 'їжею богів і використовували його у своїх релігійних церемоніях.";
let otherDrinksQuote = "Вважається, що матча була створена для справжніх самураїв.";
let somethingToEatQuote = "Чи знали ви, що овочі та фрукти, які мають жовте забарвлення – це чудові антидепресанти, розщеплюють жири та покращують обмін речовин?";
let trendSpecialQuote = "TREND SPECIAL - це унікальні напої та десерти, які ви не знайдете в інших кафе." +
    " Наші працівники вкладають усе своє серце в створення цих шедеврів. Спробуйте та ви не пошкодуєте!";

let teaImg = "/pictures/tea/teaImg.png";
let coffeeImg = "/pictures/coffee/coffeeImg.png";
let dessertsImg = "/pictures/desserts/dessertIcon.webp";
let otherDrinksImg = "/pictures/otherDrinks/hotChocolateIcon.png";
let somethingToEatImg = "/pictures/toEat/sandwich.png";
let specialImg = "/pictures/special/special.png";

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/tea', async (req, res) => {
    try {
        const items = await Product.find({ category: 'tea' });
        res.render('productItem', {
            item: items,
            title: 'Tea',
            titleUA: 'ЧАЙ',
            img: teaImg,
            quote: teaQuote,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data');
    }
});


app.get('/coffee', async (req, res) => {
    const items = await Product.find({ category: 'coffee' });
    res.render('productItem', {
        item: items,
        title: 'Coffee',
        titleUA: 'КАВА',
        img: coffeeImg,
        quote: coffeeQuote,
    });
});

app.get('/drinkElse', async (req, res) => {
    const items = await Product.find({ category: 'drinkElse' });
    res.render('productItem', {
        item: items,
        title: 'Other drinks',
        titleUA: ' НАПОЇ',
        img: otherDrinksImg,
        quote: otherDrinksQuote,
    });
});

app.get('/desserts', async (req, res) => {
    const items = await Product.find({ category: 'desserts' });
    res.render('productItem', {
        item: items,
        title: 'Desserts',
        titleUA: 'ДЕСЕРТИ',
        img: dessertsImg,
        quote: dessertsQuote,
    });
});

app.get('/toEat', async (req, res) => {
    const items = await Product.find({ category: 'somethingToEat' });
    res.render('productItem', {
        item: items,
        title: 'Something To Eat',
        titleUA: 'ЩОСЬ ПОЇСТИ',
        img: somethingToEatImg,
        quote: somethingToEatQuote,
    });
});

app.get('/trendSpecial', async (req, res) => {
    const items = await Product.find({ category: 'special' });
    res.render('productItem', {
        item: items,
        title: 'TREND SPECIAL',
        titleUA: 'TREND SPECIAL',
        img: specialImg,
        quote: trendSpecialQuote,
    });
});

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
