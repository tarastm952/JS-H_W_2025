// Завдання 1. #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname =surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(10, "Taras", "Tarasenko", "taras@gmail.com", "380937499167"));
users.push(new User(2, "Oleg", "Olegenko", "oleg@gmail.com", "380937499168"));
users.push(new User(3, "Vova", "Ostapenko", "vova@gmail.com", "380937499169"));
users.push(new User(4, "Dana", "Davudenko", "dana@gmail.com", "380937499151"));
users.push(new User(5, "Diana", "Kushnir", "diana@gmail.com", "380937499152"));
users.push(new User(6, "Max", "Pyndor", "max@gmail.com", "380937499153"));
users.push(new User(7, "David", "Ivannok", "david@gmail.com", "380937499154"));
users.push(new User(8, "Yana", "Iban", "yana@gmail.com", "380937499155"));
users.push(new User(9, "Denis", "Tsar", "denis@gmail.com", "380937499156"));
users.push(new User(1, "Anna", "Ovchar", "anna@gmail.com", "380937499157"));

// Виводимо масив у консоль
console.log(users);


// Завдання 2. #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

const  fun4 = (arr) => arr.filter((el)=> el.id % 2 === 0 )
console.log(fun4(users));

// Завдання 3. #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

const fun3 = (array) => array.sort((a, b) => a.id - b.id);
console.log(fun3(users));

// Завдання 4. #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//

function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let randomOrders = () => {
    let rand = Math.floor( Math.random() * 10 + 1);
    let orders = [];
    for (let i = 0; i < rand; i++ ) {
        orders.push(`some-order${i +1}`);
    }
    return orders;
}

let clients = [];

for (let i= 0; i < 10; i++){
    clients.push(new Client(i + 1, `name${i + 1}`, `surname${i + 1}`,
        `email${i + 1}@gmail.com`, `096016172${i + 1}`, randomOrders()
    ));
}


console.log(clients);

//
// Завдання 5. #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

const fun5 = () => clients.sort((a, b) => a.order.length -b.order.length );
console.log(fun5());

//
// Завдання 6. #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`Model - ${this.model}; Producer - ${this.producer}; Year - ${this.year}; Max Speed - ${this.maxSpeed}; Engine Capacity ${this.engineCapacity}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed += newSpeed;
        } else {
            console.log('Швидкість не може бути негативною');
        }
    }

    this.changeYear = function (newValue) {
        return this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('X5', 'BMW', 2010, 220, 70);

car.increaseMaxSpeed(200);
car.changeYear(2022);
car.addDriver({name: 'Taras', age: 29});
car.drive();
car.info();

//
// Завдання 7. #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Model - ${this.model}; Producer - ${this.producer}; Year - ${this.year}; Max Speed - ${this.maxSpeed}; Engine Capacity ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed += newSpeed;
        } else {
            console.log('Швидкість не може бути негативною');
        }
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new Car2('X6', 'BMW', 2012, 220, 90);

car2.increaseMaxSpeed(400);
car2.changeYear(2018);
car2.addDriver({name: 'Oleg', age: 30});
car2.drive();
car2.info();



//
//
// Завдання 8. #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 20, 35),
    new Cinderella('Olena', 22, 36),
    new Cinderella('Dana', 25, 37),
    new Cinderella('Nastya', 21, 38),
    new Cinderella('Darina', 23, 39),
    new Cinderella('Mia', 24, 40),
    new Cinderella('Olya', 26, 41),
    new Cinderella('Nika', 27, 42),
    new Cinderella('Veronika', 28, 43),
    new Cinderella('Lucy', 29, 44)
];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    findShoe(cinderellas) {
        return cinderellas.find(cinderella => cinderella.shoeSize === this.foundShoe);
    }
}

let prince = new Prince('Oleg', 18, 44);

for (let cinderella of cinderellas) {
    if (cinderella.shoeSize === prince.foundShoe) {
        console.log(`Знайдена попелюшка: ${cinderella.name}, Вік: ${cinderella.age}, Розмір ноги: ${cinderella.shoeSize}`);
        break;
    }
}

console.log("Знайдена попелюшка через find():", prince.findShoe(cinderellas));

// Завдання 9. #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// foreach;
// Завдання 9. #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// foreach;
Array.prototype.myForeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

let someArray9 = [1, 2, 3, 4];

// myFilter
let filteredArray = someArray9.myFilter(function (currentValue, index, array) {
    return currentValue % 2 === 0;
});

console.log(filteredArray); // [2, 4]

// myForEach
someArray9.myForeach(function (el, index, arr) {
    console.log(`Element: ${el}; Index: ${index}; Array:`, arr);
});




