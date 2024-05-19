// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArray = [];
usersArray.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'));
usersArray.push(new User(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891'));
usersArray.push(new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '123-456-7892'));
usersArray.push(new User(4, 'Bob', 'Smith', 'bob.smith@example.com', '123-456-7893'));
usersArray.push(new User(5, 'Charlie', 'Brown', 'charlie.brown@example.com', '123-456-7894'));
usersArray.push(new User(6, 'David', 'Wilson', 'david.wilson@example.com', '123-456-7895'));
usersArray.push(new User(7, 'Eve', 'Taylor', 'eve.taylor@example.com', '123-456-7896'));
usersArray.push(new User(8, 'Frank', 'Moore', 'frank.moore@example.com', '123-456-7897'));
usersArray.push(new User(9, 'Grace', 'Davis', 'grace.davis@example.com', '123-456-7898'));
usersArray.push(new User(10, 'Hannah', 'Miller', 'hannah.miller@example.com', '123-456-7899'));

console.log(usersArray);
console.log('');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsersArray = usersArray.filter(user => user.id % 2 === 0);
console.log(filteredUsersArray);
console.log('');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

usersArray.sort((a, b) => a.id - b.id);
console.log(usersArray);
console.log('');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientsArray = [];
clientsArray.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2']));
clientsArray.push(new Client(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891', ['item3']));
clientsArray.push(new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '123-456-7892', ['item4', 'item5', 'item6']));
clientsArray.push(new Client(4, 'Bob', 'Smith', 'bob.smith@example.com', '123-456-7893', ['item7']));
clientsArray.push(new Client(5, 'Charlie', 'Brown', 'charlie.brown@example.com', '123-456-7894', ['item8', 'item9']));
clientsArray.push(new Client(6, 'David', 'Wilson', 'david.wilson@example.com', '123-456-7895', ['item10', 'item11', 'item12']));
clientsArray.push(new Client(7, 'Eve', 'Taylor', 'eve.taylor@example.com', '123-456-7896', ['item13']));
clientsArray.push(new Client(8, 'Frank', 'Moore', 'frank.moore@example.com', '123-456-7897', ['item14', 'item15']));
clientsArray.push(new Client(9, 'Grace', 'Davis', 'grace.davis@example.com', '123-456-7898', ['item16', 'item17', 'item18']));
clientsArray.push(new Client(10, 'Hannah', 'Miller', 'hannah.miller@example.com', '123-456-7899', ['item19']));

console.log(clientsArray);
console.log('');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientsArray.sort((a, b) => a.order.length - b.order.length);
console.log(clientsArray);
console.log('');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car2(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.manufacturer}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engineVolume}`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let myCar2 = new Car2('Model S', 'Tesla', 2020, 250, 2.5);

myCar2.drive();
myCar2.info();

myCar2.increaseMaxSpeed(20);
console.log(myCar2.maxSpeed);

myCar2.changeYear(2021);
console.log(myCar2.year);

myCar2.addDriver({ name: 'John Doe', age: 30 });
console.log(myCar2.driver);
console.log('');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car3 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.manufacturer}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engineVolume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myCar3 = new Car3('Model S', 'Tesla', 2020, 250, 2.5);

myCar3.drive();
myCar3.info();

myCar3.increaseMaxSpeed(20);
console.log(myCar3.maxSpeed); // Виведе: 270

myCar3.changeYear(2021);
console.log(myCar3.year); // Виведе: 2021

myCar3.addDriver({ name: 'John Doe', age: 30 });
console.log(myCar3.driver);
console.log('');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cinderella 1', 19, 36),
    new Cinderella('Cinderella 2', 20, 37),
    new Cinderella('Cinderella 3', 21, 38),
    new Cinderella('Cinderella 4', 22, 39),
    new Cinderella('Cinderella 5', 23, 40),
    new Cinderella('Cinderella 6', 24, 41),
    new Cinderella('Cinderella 7', 25, 42),
    new Cinderella('Cinderella 8', 26, 43),
    new Cinderella('Cinderella 9', 27, 44),
    new Cinderella('Cinderella 10', 28, 45)
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderellaByLoop(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoeSize) {
                return cinderella;
            }
        }
        return null;
    }

    findCinderellaByFind(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
    }
}

let prince = new Prince('Prince Charming', 30, 40);

let foundCinderellaByLoop = prince.findCinderellaByLoop(cinderellas);
if (foundCinderellaByLoop) {
    console.log(`Попелюшка за допомогою циклу: ${foundCinderellaByLoop.name}, Вік: ${foundCinderellaByLoop.age}, Розмір ноги: ${foundCinderellaByLoop.footSize}`);
} else {
    console.log('Попелюшка не знайдена за допомогою циклу.');
}

let foundCinderellaByFind = prince.findCinderellaByFind(cinderellas);
if (foundCinderellaByFind) {
    console.log(`Попелюшка за допомогою find: ${foundCinderellaByFind.name}, Вік: ${foundCinderellaByFind.age}, Розмір ноги: ${foundCinderellaByFind.footSize}`);
} else {
    console.log('Попелюшка не знайдена за допомогою find.');
}
console.log('');

// Через Array.prototype. створити власний foreach, filter, map

// Власний forEach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Власний filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Власний map
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

let arr = [1, 2, 3];

console.log('myForEach:');
arr.myForEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});

console.log('myFilter:');
let filteredArr = arr.myFilter(element => element > 1);
console.log(filteredArr); // [2, 3]

console.log('myMap:');
let mappedArr = arr.myMap(element => element * 2);
console.log(mappedArr); // [2, 4, 6]
