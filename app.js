const express = require('express');
const app = express();
const path = require('path');
const jsonData = require('./products.json');


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
app.get('/drinkElse', (req, res) => {
    res.render('productItem',
        { item: jsonData.drinkElse, 
        title: 'Other drinks',
        titleUA: ' НАПОЇ',
        img: otherDrinksImg,
        quote: otherDrinksQuote,
     });
});
app.get('/desserts', (req, res) => {
    res.render('productItem',
        { item: jsonData.desserts, 
        title: 'Desserts',
        titleUA: 'ДЕСЕРТИ',
        img: dessertsImg,
        quote: dessertsQuote,
     });
});
app.get('/toEat', (req, res) => {
    res.render('productItem',
        { item: jsonData.somethingToEat, 
        title: 'Something To Eat',
        titleUA: 'ЩОСЬ ПОЇСТИ',
        img: somethingToEatImg,
        quote: somethingToEatQuote,
     });
});
app.get('/trendSpecial', (req, res) => {
    res.render('productItem',
        { item: jsonData.special, 
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
