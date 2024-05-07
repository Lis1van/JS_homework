// 1. Створити пустий масив та :

let nothing = [];

//     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 2; nothing.length < 50; i += 2) {
    nothing[nothing.length] = i;
}
console.log(nothing);
console.log('');

//     b. заповнити його 50 непарними числами за допомоги циклу.

let nothing2 = [];
for (let i = 1; nothing2.length < 50; i += 2) {
    nothing2[nothing2.length] = i;
}
console.log(nothing2);
console.log('');

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let randomNumbers = [];
for (let i = 0; i < 20; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 100);
}
console.log(randomNumbers);
console.log('');

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let randomNumbers2 = [];
for (let i = 0; i < 20; i++) {
    randomNumbers2[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8; // Генерируем случайное число от 8 до 732
}
console.log(randomNumbers2);
console.log('');

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < randomNumbers2.length; i += 3) {
    console.log(randomNumbers2[i]);
}
console.log('');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < randomNumbers2.length; i += 3) {
    if (randomNumbers2[i] % 2 === 0) {
        console.log(randomNumbers2[i]);
    }
}
console.log('');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newMas = [];
for (let i = 2; i < randomNumbers2.length; i += 3) {
    if (randomNumbers2[i] % 2 === 0) {
        newMas[newMas.length] = randomNumbers2[i];
    }
}
console.log(newMas);
console.log('');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < randomNumbers2.length - 1; i++) {
    if (randomNumbers2[i + 1] % 2 === 0) {
        console.log(randomNumbers2[i]);
    }
}
console.log('');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let purchases = [100, 250, 50, 168, 120, 345, 188];
let total = 0;
for (let i = 0; i < purchases.length; i++) {
    total += purchases[i];
}
let average = total / purchases.length;
console.log("Середній чек: " + average);
console.log('');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let originalArray = [];
for (let i = 0; i < 10; i++) {
    originalArray[i] = Math.floor(Math.random() * 100);
}
console.log("Початковий масив:", originalArray);
let multipliedArray = [];
for (let i = 0; i < originalArray.length; i++) {
    multipliedArray[i] = originalArray[i] * 5;
}
console.log("Масив з помноженими значеннями на 5:", multipliedArray);
console.log('');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let mixedArray = ['hello', 123, true, 'world', 456, false, null, undefined, 789];
let numbersArray = [];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        numbersArray.push(mixedArray[i]);
    }
}
console.log("Масив з числами:", numbersArray);
console.log('');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            let userWithCity = {
                id: usersWithId[i].id,
                name: usersWithId[i].name,
                age: usersWithId[i].age,
                status: usersWithId[i].status,
                address: {
                    user_id: citiesWithId[j].user_id,
                    country: citiesWithId[j].country,
                    city: citiesWithId[j].city
                }
            };
            usersWithCities.push(userWithCity);
        }
    }
}
console.log(usersWithCities);
console.log('');

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [3, 8, 12, 5, 10, 7, 6, 9, 4, 11];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
console.log('');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copiedArray = [];
for (let i = 0; i < originalArray2.length; i++) {
    copiedArray[i] = originalArray2[i];
}
console.log(copiedArray);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < letters.length; i++) {
    word += letters[i];
}
console.log(word);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let letters2 = ['a', 'b', 'c'];
let word2 = '';
let i = 0;
while (i < letters2.length) {
    word2 += letters2[i];
    i++;
}
console.log(word2);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letters3 = ['a', 'b', 'c'];
let word3 = '';
for (let letter of letters3) {
    word3 += letter;
}
console.log(word3);