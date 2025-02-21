// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        // Перевірка на NaN (бо typeof NaN === "number", але NaN !== NaN)
        if (typeof obj === 'number' && isNaN(obj)) {
            return NaN; // Повертаємо новий NaN
        }
        return obj; // Примітиви (null, number, string, boolean, undefined) повертаємо як є
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (typeof obj === 'function') {
        return obj; // Копіюємо функції без змін
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]); // Рекурсивне копіювання
        }
    }

    return copy;
}

// Тестовий об'єкт
let obj3 = {
    a: 1,
    b: new Date(),
    c: undefined,
    d: function() {
        console.log('test');
    },
    e: NaN
};

// Копіюємо
let objCopy = deepClone(obj3);

// Перевіряємо результат
console.log(objCopy);
console.log(objCopy.b instanceof Date); // true (Date скопійовано правильно)
console.log(typeof objCopy.d); // "function" (тепер функції зберігаються!)
console.log(isNaN(objCopy.e)); // true (NaN збережено)
console.log(objCopy.c === undefined); // true (undefined не загубилося)



//
// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

let transformedArray = coursesAndDurationArray.map((el, index)=>({id:index + 1, ...el}));
console.log(transformedArray);

