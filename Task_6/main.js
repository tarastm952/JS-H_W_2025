// Завдання 1. #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

function fun1 () {
    console.log('hello world'.length);
    console.log('lorem ipsum'.length);
    console.log('javascript is cool'.length);
}

fun1();

// Завдання 2. #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

function fun2 () {
    console.log('hello world'.toUpperCase());
    console.log('lorem ipsum'.toUpperCase());
    console.log('javascript is cool'.toUpperCase());
}

fun2();

// Завдання 3. #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

function fun3 () {
    console.log('HELLO WORLD'.toLowerCase());
    console.log('LOREM IPSUM'.toLowerCase());
    console.log('JAVASCRIPT IS COOL'.toLowerCase());
}

fun3();

// Завдання 4. #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

function fun4 () {
    console.log(' dirty string   '.trim());
}

fun4();

// Завдання 5. #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ')
}

console.log(stringToArray(str));

// Завдання 6. #Rbr5kEQ
// - Є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомогою map перетворити всі об'єкти в масиві на стрінгові.
let arr6 = [10,8,-7,55,987,-1011,0,1050,0]

function fun6(arr) {
    return arr.map((el)=>el.toString())
}

console.log(fun6(arr6));

// Завдання 7. #5hqyKTfmc
// - Створити функцію sortNums(array,direction), яка приймає масив чисел та сортує його від більшого до меншого або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    } else {
        return 'невірне значення';
    }
}

console.log(sortNums([...nums], 'ascending'));
console.log(sortNums([...nums], 'descending'));


// ==========================
// Завдання 8. #yo06d74c1C
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- Відсортувати його за спаданням за monthDuration
// -- Відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// -- За допомогою map перетворити кожен елемент на наступний тип {id, title, monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function fun8(array) {
    console.log(array.sort((a,b)=> b.monthDuration - a.monthDuration));
    console.log(array.filter((el)=> el.monthDuration > 5));
    let newArray = array.map((el, index)=> {
        el.id = index + 1
    return el;
    });
    console.log(newArray)
}

fun8(coursesAndDurationArray);



// Завдання 9. =========================
// #bolvdlhP
// Описати колоду карт (від 6 до туза без джокерів)
// - Знайти піковий туз
// - Всі шістки
// - Всі червоні карти
// - Всі буби
// - Всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let deck = [
    // Піки (spades)
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    // Бубни (diamonds)
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    // Черви (hearts)
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    // Трефи (clubs)
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];

function fun9Spade (array){
   console.log(array.filter((el) => {
        return el.cardSuit === 'spade' && el.value === 'ace'
    } ))

}

fun9Spade(deck);

function fun96 (array){
    console.log(array.filter((el) => {
        return  el.value === '6'
    } ))

}

fun96(deck);

function fun9Red (array){
    console.log(array.filter((el) => {
        return el.color === 'red'
    } ))

}

fun9Red(deck);

function fun9Diamond (array) {
    console.log(array.filter(el => el.cardSuit === 'diamond'));
}

fun9Diamond(deck);

function fun9Clubs (array){
    console.log(array.filter((el) => {
        return el.cardSuit === 'clubs' && el.value !== '6' && el.value !== '7' && el.value !== '8'
    } ))

}

fun9Clubs(deck);



// =========================
// #EP5I1UUzAX
// Завдання 10. Взяти описану колоду карт, та за допомогою reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// }

function fun10Reduce(array) {
    const grouped = array.reduce((acc, item) => {
        acc[item.cardSuit] = acc[item.cardSuit] || []; // Ініціалізуємо масив, якщо його ще немає
        acc[item.cardSuit].push(item); // Додаємо карту у відповідну масть
        return acc;
    }, {
        spade: [],
        diamond: [],
        heart: [],
        clubs: []
    });

    console.log(grouped);
}

fun10Reduce(deck);


// =========================
// Завдання 11. #4LJn7zBx
// Взяти з arrays.js масив coursesArray
//  -- Написати пошук всіх об'єктів, в яких в modules є sass
// -- Написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function fun11(array, mod) {
    return array.filter((el) => {
        return el.modules.includes(mod);
    });
}

console.log(fun11(coursesArray, 'sass'));
console.log(fun11(coursesArray, 'docker'));

// -- Написати пошук всіх об'єктів, в яких в modules є sass
// -- Написати пошук всіх об'єктів, в яких в modules є docker
