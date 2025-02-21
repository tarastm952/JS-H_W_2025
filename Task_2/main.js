//Завдання 1. Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//

let some_array = ['1', 'second', 100, false, true , {value: 'some_value'}, [1, 2, 3, 4, 5],
NaN, undefined, 'end'
]

console.log(some_array[0])
console.log(some_array[1])
console.log(some_array[2])
console.log(some_array[3])
console.log(some_array[4])
console.log(some_array[5])
console.log(some_array[6])
console.log(some_array[7])
console.log(some_array[8])
console.log(some_array[9])

console.log('=== Кінець першого завдання ===')


//Завдання 2. #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//

let someObj1Task1 = {
    title: 'Title1',
    pageCount: 200,
    genre: 'Genre1'
}

let someObj2Task1 = {
    title: 'Title2',
    pageCount: 300,
    genre: 'Genre2'
}

let someObj3Task1 = {
    title: 'Title3',
    pageCount: 400,
    genre: 'Genre3'
}








//Завдання 3.     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//

let someObj1Task2 = {
    title: 'Title1',
    pageCount: 200,
    genre: 'Genre1',
    authors: [{name: 'someName', age: 30}, {name: 'anotherName' , age: 40}]
}

let someObj2Task2 = {
    title: 'Title2',
    pageCount: 300,
    genre: 'Genre2',
    authors: [{name: 'someName', age: 30}, {name: 'anotherName' , age: 40}]
}

let someObj3Task2 = {
    title: 'Title3',
    pageCount: 400,
    genre: 'Genre3',
    authors: [{name: 'someName', age: 30}, {name: 'anotherName' , age: 40}]
}

//Завдання 4.     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

someArray = [{name: 'someName1', username: 'someUserName1', password: 'somePassword1'},
    {name: 'someName2', username: 'someUserName2', password: 'somePassword2'},
    {name: 'someName3', username: 'someUserName3', password: 'somePassword3'},
    {name: 'someName4', username: 'someUserName4', password: 'somePassword4'},
    {name: 'someName5', username: 'someUserName5', password: 'somePassword5'},
    {name: 'someName6', username: 'someUserName6', password: 'somePassword6'},
    {name: 'someName7', username: 'someUserName7', password: 'somePassword7'},
    {name: 'someName8', username: 'someUserName8', password: 'somePassword8'},
    {name: 'someName9', username: 'someUserName9', password: 'somePassword9'},
    {name: 'someName10', username: 'someUserName10', password: 'somePassword10'},
]

console.log(someArray[0].password)
console.log(someArray[1].password)
console.log(someArray[2].password)
console.log(someArray[3].password)
console.log(someArray[4].password)
console.log(someArray[5].password)
console.log(someArray[6].password)
console.log(someArray[7].password)
console.log(someArray[8].password)
console.log(someArray[9].password)

// Завдання 5. #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//

someArrayTask5 = [
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Monday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Tuesday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Wednesday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Thursday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Friday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Saturday' },
    {temperatureMorning: 30, temperatureAfternoon: 40, temperatureEvening : 25, day:'Sunday' }
]

// Завдання 6. Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

x = 100

if (x !== 0) {
    console.log('Вірно')
}
else {
    console.log('Не вірно')
}


// Завдання 7. #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//

let time = 30;

if (time >= 0 && time <= 14 ) {
    console.log('Перша чверть')
} else if (time >= 15 && time <= 29) {
    console.log('Друга чверть')
} else if (time >= 30 && time <= 44) {
    console.log('Третя чверть')
} else if (time >= 45 && time <= 59) {
    console.log('Четврета чверть')
} else {
    console.log('Число задано невірно')
}

// Завдання 8. #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

let day = 28

if (day >= 0 && day <= 10) {
    console.log('Перша декада місяця')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця')
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця')
} else {
    console.log('Невірне число')
}


//Завдання 9. #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

let dayTask9 = 1;

switch (dayTask9) {
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Неправильне значення тижня')
}


//Завдання 10.     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
num1 = 100;
num2 = 'abc'; // Не число

// Перевірка на числа
if (isNaN(num1) || isNaN(num2)) {
    console.log('Один або обидва введені значення не є числами');
} else if (num1 === num2) {
    console.log('Числа рівні');
} else if (num1 > num2) {
    console.log(`${num1} є більшим числом`);
} else {
    console.log(`${num2} є більшим числом`);
}


// Завдання 11.        #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

someValue = prompt('Введіть значення')

switch (someValue) {
    case false:
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    case 0:
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    case "":
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    case null:
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    case undefined:
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    case NaN:
        console.log('Не вірне значення')
        someValue = 'default'
        break;

    default:
        console.log('Значення вірне!')
        break;

}

//АБО:

if (!someValue) {
    console.log('Не вірне значення');
    someValue = 'default';
} else {
    console.log('Вірне значення');
}

console.log('Значення х:', someValue)

//Завдання 12.     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Спуре')
}
