// Завдання 1. #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRectangle(a, b) {
    return a * b;
}

let p1 = areaOfRectangle(10, 20);
console.log(p1);


// Завдання 2. #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2)
}

let r2 = areaOfCircle(10);
console.log(r2);

// Завдання 3. #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function surfaceAreaOfCylinder(radius, h) {
    return 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * h
}

let r3 = surfaceAreaOfCylinder(10,20);
console.log(r3);



// Завдання 4. #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let someArray = ['one', 2, true, {name: 'name', age: 12}, null]

function fun4 (some) {
    for (let i of some) {
        console.log(i)
    }
}

fun4(someArray);


// Завдання 5. #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function fun5 (some) {
    document.write(`${some}`);
}

fun5('<p>Some text</p>')


// #hOL6126
//Завдання 6. - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function fun6(some) {

    document.write(`<ul>`);

    for(let i=0; i<3; i++) {

        document.write(`<li>${some}</li>`)

    }
    document.write(`</ul>`)
}

fun6(`Some text`);

// Завдання 7. #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function fun7(some, li) {

    document.write(`<ul>`);

    for(let i=0; i<li; i++) {

        document.write(`<li>${some}</li>`)

    }
    document.write(`</ul>`)
}

fun7(`Some text 2`, 5);


// Завдання 9. #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function fun9(someArray) {

    document.write(`<ul>`)

    for(let i = 0; i < someArray.length; i++){
        document.write(`<li>${someArray[i]}</li>`)
    }

    document.write(`</ul>`)

}

fun9(['1', 100, true, null])

// Завдання 10. #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let someArray10 = [{id: 1, name:'Taras', age: 100},
    {id: 2, name:'Oleg', age: 99},
    {id: 3, name:'Anna', age: 98},
    {id: 4, name:'Daniel', age: 97}
]

function someFun10 (some) {

    for (let elem of some) {
        document.write(`
            <div>
                <p>ID: ${elem.id}</p>
                <p>Name: ${elem.name}</p>
                <p>Age: ${elem.age}</p>
            </div>
        `);
    }

}

someFun10(someArray10);

// Завдання 11.    #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let someArray11 = [100, 200, 300, -100, -200, 1, 10000]

function fun11 (some) {

    let num11 = someArray11[0];

    for (let i of some) {
        if(num11 > i) {
            num11 = i
        }
    }

    return num11;

}

console.log(fun11(someArray11));

// Завдання 12. #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function fun12 (arr) {
    let number = 0;

    for(let num of arr) {
        number += num
    }

    return number;

}

console.log(fun12([1, 2, 10]));

// Завдання 13. #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    // Перевіряємо, чи індекси валідні
    if (
        index1 >= 0 && index1 < arr.length &&
        index2 >= 0 && index2 < arr.length
    ) {
        // Міняємо елементи місцями
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    return arr; // Повертаємо змінений масив
}

console.log(swap([11, 22, 33, 44], 0, 1)); // -> [22, 11, 33, 44]



// Завдання 14. #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(value, array, currency) {
    for (let item of array) {
        if (item.currency === currency) {
            return value / item.value;
        }
    }
    return 'Валюта не знайдена';
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));

