/*

#dYQNrBV
Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log

#6Qb97gsv
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
 (Не об'єкт, просто за допомоги конкатенації)


#4N0y5tufA
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;

#ruUtWDUI
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

*/

//Завдання 1:
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello'
console.log(hello)
let owu = 'owu'
console.log(owu)
let com = 'com'
console.log(com)
let ua = 'ua'
console.log(ua)
let num1 = 1
console.log(num1)
let num2 = 10
console.log(num2)
let num3 = -999
console.log(num3)
let num4= 123
console.log(num4)
let num5= 3.14
console.log(num5)
let num6 = 2.7
console.log(num6)
let num7= 16
console.log(num7)
let bol1 = true
console.log(bol1)
let bol2 = false
console.log(bol2)

// Завдання 2:

//#6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
//  (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Taras'
let middleName = 'Mykolayovich'
let lastName = 'Mazepa'
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person)

// Завдання 3:
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;
let a = 100; let b = '100'; let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Завдання 4:
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fName = prompt('Введіть ваше ім\'я: ')
let midName = prompt('Введіть по батькові: ')
let yearsOld = prompt('Введіть ваш вік')
console.log('Ім\'я: ' + fName + '; ' + 'По-батькові: ' +  midName + '; ' + 'Ваш вік: ' + yearsOld + ';')
