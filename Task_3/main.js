// Завдання 1. #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// #TYj7ncx


// for ( let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(`<div style="background-color: red"> Деякий довільний текст </div>`)
// }


// Завдання 2. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// #uzkt71dp


// for ( let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(`<div style="background-color: red">Деякий довільний текст ${i} </div>`)
// }


// Завдання 3. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     #OeT7t3uUMFi

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Some text</h1>`)
//     console.log(i)
//     i++
//
// }

// Завдання 4. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     #vLSZKMlO

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Some text ${i}</h1>`)
//     console.log(i)
//     i++
//
// }


// Завдання 5. - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`);
// for (let item of listOfItems) {
//     document.write(`<li>${item}</li>`);
// }
// document.write(`</ul>`);


// -----------------------------------------------
// Завдання 6.    #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div class="products-container">`);  // Один контейнер для всіх продуктів
// for (let item of products) {
//     document.write(`<div class="product-card" style="border: 1px solid red; margin: 10px; padding: 10px;">`);
//     document.write(`<h3 class="product-title">${item.title}. Price - ${item.price}</h3>`);
//     document.write(`<img src="${item.image}" alt="${item.title}" class="product-image" style="width: 150px; border: 1px solid black;">`);
//     document.write(`</div>`);
// }
// document.write(`</div>`);



//
// --------------------
// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let userStatusTrue = ''
let userStatusFalse = ''
let usersOver30 = ''

for (let user of users) {
    if (user.status === true) {
        userStatusTrue += user.name + ', ';
    } else {
        userStatusFalse += user.name + ', ';
    }
    if (user.age > 30) {
        usersOver30 += user.name + ', ';
    }
}

console.log(`Користувачі зі статусом true: ${userStatusTrue.slice(0, -2) || 'немає користувачів'}`);
console.log(`Користувачі зі статусом false: ${userStatusFalse.slice(0, -2) || 'немає користувачів'}`);
console.log(`Користувачі старші за 30: ${usersOver30.slice(0, -2) || 'немає користувачів'}`);

