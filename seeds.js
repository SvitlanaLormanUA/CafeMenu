const mongoose = require('mongoose');

const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection error');
        console.log(err);
    });

    

   const productsData = {"tea": [
        {
           "category": "tea",
            "name": "Чай в асортименті",
            "items": "зелений, чорний, фруктовий",
            "price": 40,
            "icon":  "/pictures/tea/ordinaryTea.jpeg", 
            "volume": "300/500"
        },

        {
            "category": "tea",
            "name": "Травяний чай",
            "price": 50,
            "icon":  "/pictures/tea/herbalTea.jpeg",
             "volume": "300/500"
        },
        {
            "category": "tea",
            "name": "Натуральний чай",
            "items": "малиновий, медовий, чорничний",
            "price": 50,
            "icon":  "/pictures/tea/naturalTea.webp",
             "volume": "300"

        },
        {
            "category": "tea",
            "name": "Bubble Tea (зелений/чорний/кава)",
            "items": "кавун, манго, полуниця, кава, шоколад, карамель",
            "price": 90,
            "icon":  "/pictures/tea/bubbleTea.jpeg",
            "allergies": "Л, Г, А, МП",
             "volume": "500"

        }
    ],
    "coffee": [
        {
            "category": "coffee",
            "name": "Еспресо",
            "description": "Порція інтенсивної кави з густою текстурою, насиченим ароматом та характерною вершковою пінкою. ",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": 40,
            "icon":  "/pictures/coffee/espresso.jpeg",
            "volume": 30
        },
        {
            "category": "coffee",
            "name": "Американо",
            "description": "Менш інтенсивна та більш м'яка кава, порівняно зі звичайним еспресо. ",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "50/60",
            "icon":  "/pictures/coffee/americano.jpeg",
            "volume": "250/300"
        },
        {
            "category": "coffee",
            "name": "Фільтр кава ",
            "description": "Чорна кава, зварена альтернативним методом заварювання, де вода проходить крізь змелене зерно, без штучного тиску. Тому кава має більш мʼякий та менш кислотний смак ніж еспресо",
            "toWaiter":"Зерно та смак можете уточнити у офіціанта. Є можливість замовити без кофеїну",
            "price": "65/75",
            "icon":  "/pictures/coffee/americano.jpeg",
            "volume": "250/300"
        },
        {
            "category": "coffee",
            "name": "Капучино S/ M/ L",
            "description": "Кава з інтенсивною основою - подвійного  еспресо, кремовою текстурою молока та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "55/65/75",
            "icon":  "/pictures/coffee/capuccino.jpeg",
            "allergies": "Л, Г, А, МП",
            "volume": "200/350/450"
        },
        {
            "category": "coffee",
            "name": "Капучино на безлактозному S/M/L",
            "description": "Кава з інтенсивною основою - подвійного  еспресо, кремовою текстурою безлактозного молока та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "75/85/95",
            "icon":  "/pictures/coffee/capuccino.jpeg",
            "allergies": "Г, А, МП",
            "volume": "200/350"
        },
        {
            "category": "coffee",
            "name": "Капучино на рослинному L / XL",
            "description": "Кава з інтенсивною основою - подвійного  еспресо, кремовою текстурою рослинного молока (бананового, мигдалевого, соєвого, кокосового) та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "85/95/105",
            "icon":  "/pictures/coffee/capuccino.jpeg",
            "allergies": "СБ, Г, А",
            "volume": "200/350"
        },
        {
            "category": "coffee",
            "name": "Лате S/ M/ L",
            "description": "Кава з менш основою -  еспресо, кремовою текстурою молока та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "60/70/80",
            "icon":  "/pictures/coffee/latte.webp",
            "allergies": "Л, Г, А, МП",
            "volume": "200/350/450"
        },
        {
            "category": "coffee",
            "name": "Лате на безлактозному S/M/L",
            "description": "Кава з інтенсивною основою - подвійного  еспресо, кремовою текстурою безлактозного молока та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "80/90/105",
            "icon": "/pictures/coffee/latte.webp",
            "allergies": "Г, А, МП",
            "volume": "200/350"
        },
        {
            "category": "coffee",
            "name": "Лате на рослинному S/M/L",
            "description": "Кава з інтенсивною основою - подвійного  еспресо, кремовою текстурою рослинного молока та легкою пінкою на поверхні.",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "85/95/110",
            "icon":  "/pictures/coffee/latte.webp",
            "allergies": "Г, А, МП",
            "volume": "200/350"
        },
        {
            "category": "coffee",
            "name": "Раф Кава",
            "description": "Трендовий кавовий напій з еспресо в основі, вершками та ванільним цукром. Одним з найважливіших складових напою є повітряна вершкова пінка",
            "toWaiter":"Зерно можете уточнити у офіціанта.",
            "price": "85",
            "icon":  "/pictures/coffee/raf.jpeg",
            "allergies": "СБ, Г, А, МП, Л",
            "volume": "350"
        }
        
       
    ],
    "drinkElse": [

        {
           "category": "drinkElse",
            "name": "Матча",
            "price": 60,
            "icon":  "/pictures/tea/matcha.jpeg",
            "allergies": "Л, Г, А, МП",
             "volume": "300/500"

        },
        {
            "category": "drinkElse",
            "name": "Матча на безлактозному",
            "price": 70,
            "icon":  "/pictures/tea/matcha.jpeg",
            "allergies": "Г, А, МП",
             "volume": "300/500"

        },
        
        {
            "category": "drinkElse",
            "name": "Матча на рослинному",
            "items": "бананове, мигдалеве, кокосове",
            "price": 80,
            "icon":  "/pictures/tea/matcha.jpeg",
            "allergies": "СБ, Г, А",
             "volume": "300/500"
        },
        {
            "category": "drinkElse",
            "name": "Какао",
            "description": "* За бажанням можна додати маршмеллоу",
            "price": "65/75",
            "icon":  "/pictures/otherDrinks/cacao.webp",
            "allergies": "Л, Г, А, МП, СБ",
             "volume": "300/500"
        },
        {
            "category": "drinkElse",
            "name": "Фітнес-какао",
            "price": "75/85",
            "description": "* Какао з меншим вмістом цукру",
            "toWaiter": "* За бажанням можна додати маршмеллоу",
            "icon":  "/pictures/otherDrinks/cacao.webp",
            "allergies": "Л, Г, А, МП, СБ",
             "volume": "300/500"

        },
        {
            "category": "drinkElse",
            "name": "Какао на безлактозному молоці",
            "description": "* За бажанням можна додати маршмеллоу",
            "price": "65/75",
            "icon":  "/pictures/otherDrinks/cacao.webp",
            "allergies": "СБ, Г, А, МП",
             "volume": "300/500"
        },
        {
            "category": "drinkElse",
            "name": "Какао на рослинному молоці",
            "items": "бананове, мигдалеве, кокосове",
            "description": "* За бажанням можна додати маршмеллоу",
            "price": "80/90",
            "icon":  "/pictures/otherDrinks/cacao.webp",
            "allergies": "СБ, Г, А",
             "volume": "300/500"
        },
        {
            "category": "drinkElse",
            "name": "Гарячий шоколад",
            "price": "80/90",
            "icon":  "/pictures/otherDrinks/hotChocolate.jpeg",
            "allergies": "Л, Г, А, МП, СБ",
             "volume": "250/300"
        }
    ],
    "desserts": [
        {
            "category": "desserts",
            "name": "Медовик",
            "description": "Ніжний багатошаровий торт з медових коржів, прошарки між якими заповнює з масляно-сметанний крем.",
            "price": 75,
            "icon":  "/pictures/desserts/medovik.webp",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"
        
        },
        {
            "category": "desserts",
            "name": "Макарун",
            "description": "Популярне французьке печиво, що складається з двох мигдалевих коржів, з'єднаних ніжним кремом.",
            "price": 45,
            "icon":  "/pictures/desserts/macaroon.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"
        
        },
        {
            "category": "desserts",
            "name": "Вафельний торт",
            "description": "Так, це той десерт дитинства! Знайомий більшості смак хрустких вафельних коржів з молоком та карамеллю. Що може бути краще?",
            "price": 60,
            "icon":  "/pictures/desserts/waffleCake.webp",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"
        
        },
        {
            "category": "desserts",
            "name": "Горішки зі згущеним молоком",
            "description": "Ніжне печиво-горішки зі згущеним молоком всередині.",
            "price": 40,
            "toWaiter": "Ідеально підходять до чаю або какао🤭",
            "icon":  "/pictures/desserts/sweetNuts.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"
        
        },
        {
            "category": "desserts",
            "name": "Морозиво RUD на вагу в асортименті",
            "items": "Чорничне, малинове, шоколадне, ванільне, фісташкове, пломбір",
            "price": 35,
            "description": "* Можна замовити як у вафельному ріжку, так і у пластиковому стаканчику",
            "toWaiter": "* Уточніть у офіціанта наявність смаків.",
            "icon":  "/pictures/desserts/iceCream.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"
        
        },
        {
             "category": "desserts",
            "name": "Класичний чизкейк", 
            "price": 65,
            "description": "Ніжний сирний десеррт з вершковим суфле, карамелізований зверху",
            "icon":  "/pictures/desserts/classicCheesecake.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, МП"

        }
    ],
    "somethingToEat": [

        {
            "category": "somethingToEat",
            "name": "Сендвіч з куркою",
            "price": "95",
            "icon":  "/pictures/toEat/chicken.png",
            "allergies": "Г, Л, ЗП, Я, А, СБ, ГЧ, ГЦ, К, "
        },
        {
            "category": "somethingToEat",
            "name": "Сендвіч з тунцем",
            "price": "110",
            "icon":  "/pictures/toEat/tuna.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, ГЧ, ГЦ, К, Р "
        },
        {
            "category": "somethingToEat",
            "name": "Сендвіч з лососем",
            "price": "110",
            "icon":  "/pictures/toEat/salmon.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, ГЧ, ГЦ, К, Р "
        },
        {
            "category": "somethingToEat",
            "name": "Йогурт соєвий Alpro без цукру",
            "items": "малина, персик, вишня, лохина",
            "description": "*Наявність смаків можете уточнити у офіціанта.",
            "price": "110",
            "icon":  "/pictures/toEat/yougurt.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, ГЧ, ГЦ, К, Р "
        }
    ],
    "special": [
        {
            "category": "special",
            "name": "Полунична кава",
            "description": "Ніжне лате з полуничним сиропом, шматочками соковитої полуниці та вершковою пінкою.",
            "toWaiter":"*Зерно можете уточнити у офіціанта. Можливо приготувати з використанням безлактозного (+ 10 грн) та рослинного молока. (+ 20 грн)",
            "price": 55,
            "icon": "/pictures/special/strawberryCoffee.jpeg",
            "allergies": "СБ, Г, А, МП, Л",
            "volume": 350
        },
        {
            "category": "special",
            "name": "Кленове лате",
            "description": "Ніжне лате з кленовим сиропом та дрібочкою ароматної кориці ",
            "toWaiter":"*Зерно можете уточнити у офіціанта. Можливо приготувати з використанням безлактозного (+ 10 грн) та рослинного молока. (+ 20 грн)",
            "price": 55,
            "icon": "/pictures/special/clenLatte.jpeg",
            "allergies": "СБ, Г, А, МП, Л",
            "volume": 350
        },
        {
            "category": "special",
            "name": "Лавандове лате",
            "description": "Ніжне лате з лавандовим сиропом ",
            "toWaiter":"*Зерно можете уточнити у офіціанта. Можливо приготувати з використанням безлактозного (+ 10 грн) та рослинного молока. (+ 20 грн)",
            "price": 60,
            "icon": "/pictures/special/clenLatte.jpeg",
            "allergies": "СБ, Г, А, МП, Л",
            "volume": 350
        },
        {
            "category": "special",
            "name": "Фундучне капучино",
            "description": "Міцне капучино з фундучним молоком, вершковою пінкою, шматочками фундука та корицею",
            "toWaiter":"*Зерно можете уточнити у офіціанта. ",
            "price": 65,
            "icon": "/pictures/special/hazelnutCapp.jpeg",
            "allergies": "СБ, Г, А, Л",
            "volume": 350
        },
         {
            "category": "special",
            "name": "Чорничний кекс без цукру, глютену та лактози",
            "description": "Смачний кекс з чорницею, який щойно з печі. Ідеальний вибір для веганів та людей з інтолерантністю до цукру, глютену та лактози.",
            "toWaiter":"*У продукті використанно цукрозамінник стевію",
            "price": 85,
            "icon": "/pictures/special/blibCake.webp",
            "volume": 350
         },
         {
            "category": "special",
            "name": "Еклери без цукру глазуровані чорним шоколадом",
            "description": "Класичні еклери приготовленні без використання цуклу, а також глазуровані розтопленим чорним шоколадом 55%",
            "toWaiter":"*У продукті та шоколаді використанно цукрозамінник стевію",
            "price": 92,
            "icon": "/pictures/special/darkChocolateEclers.jpeg",
            "allergies": "Г, Л, ЗП, Я, А, СБ, ГЧ, ГЦ, К, Р ",
            "volume": 350
         }
    ]
}
async function saveProducts() {
    for (let category in productsData) {
        if (productsData.hasOwnProperty(category)) {
            let products = productsData[category];
            for (let productData of products) {
                let product = new Product(productData);
                try {
                    let savedProduct = await product.save();
                    console.log(`Saved product: ${savedProduct.name}`);
                } catch (e) {
                    console.log(`Error saving product: ${productData.name}`);
                    console.log(e);
                }
            }
        }
    }
}

saveProducts()
    .then(() => {
        console.log('All products saved');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log('Error saving products');
        console.log(err);
    });
