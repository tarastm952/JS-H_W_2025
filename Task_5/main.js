// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
//Завдання 1. #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaOfRectangle = (a, b) => a * b;
console.log(areaOfRectangle(10, 20));


//Завдання 2. #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(areaOfCircle(10));

//Завдання 3. #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const surfaceAreaOfCylinder = (radius, h) => 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * h;

console.log(surfaceAreaOfCylinder(10, 20));


//Завдання 4. #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let someArray = ['one', 2, true, {name: 'name', age: 12}, null];
const fun4 = (some) => {
    for (let i of some) {
        console.log(i)
    }
}

fun4(someArray);


//Завдання 5. #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const fun5 = (some) => {
    document.write(`${some}`);
}

fun5('<p>Some text</p>')

//Завдання 6. #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const fun6 = (some) => {
    document.write(`<ul>`);

    for(let i=0; i<3; i++) {

        document.write(`<li>${some}</li>`)

    }
    document.write(`</ul>`)
}

fun6(`Some text`);

//Завдання 7. #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const fun7 = (some, li) => {

    document.write(`<ul>`);

    for(let i=0; i<li; i++) {

        document.write(`<li>${some}</li>`)

    }
    document.write(`</ul>`)
}

fun7(`Some text 2`, 5);

//Завдання 8. #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const fun9 = (someArray) => {

    document.write(`<ul>`)

    for(let i = 0; i < someArray.length; i++){
        document.write(`<li>${someArray[i]}</li>`)
    }

    document.write(`</ul>`)

}

fun9(['1', 100, true, null])



//Завдання 9. #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let someArray10 = [{id: 1, name:'Taras', age: 100},
    {id: 2, name:'Oleg', age: 99},
    {id: 3, name:'Anna', age: 98},
    {id: 4, name:'Daniel', age: 97}
]

const someFun10 = (some) => {
    for (let elem of some) {
        document.write(`
            <div>
                <p>ID: ${elem.id}</p>
                <p>Name: ${elem.name}</p>
                <p>Age: ${elem.age}</p>
            </div>
        `);
    }
};


someFun10(someArray10);



// Завдання 10.    #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let someArray11 = [100, 200, 300, -100, -200, 1, 10000]

const fun11 = (some) => {

    let num11 = someArray11[0];

    for (let i of some) {
        if(num11 > i) {
            num11 = i
        }
    }

    return num11;

}

console.log(fun11(someArray11));

// Завдання 11. #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const fun12 = (arr) => {
    let number = 0;

    for(let num of arr) {
        number += num
    }

    return number;

}

console.log(fun12([1, 2, 10]));

// Завдання 12. #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
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

// Завдання 13. #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (value, array, currency) => {
    for (let item of array) {
        if (item.currency === currency) {
            return value / item.value;
        }
    }
    return 'Валюта не знайдена';
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
