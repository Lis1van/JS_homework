// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (side_a, side_b) => side_a * side_b;
console.log(square(3,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const squareCircle = (r) => 3.14 * (r * r);
console.log(squareCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squareCylindre = (r, h) => 2* 3.14 * r * r + 2 * 3.14 * r * h;
console.log(squareCylindre(3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

const array = (item) => {
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
}
array([2, 4, 1, 5, 7, 8, 9, 10]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph = (text) => document.write(`<p>${text}</p>`);
paragraph('Тренировка и еще раз тренировка!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const list = (itemLi) => {
    for (let i = 0; i < 3; i++) {
        document.write(`<ul><li>${itemLi}</li></ul>`);
    }
}
list('Практика');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const list2 = (textLi, quantityLi) => {for (let i = 0; i < quantityLi; i++){document.write(`<ul><li>${textLi}</li></ul>`)}};
list2('Ещё один список', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const massArray = (...item) => {for (let i = 0; i < item.length; i++){
    document.write(`<ul><li>${item[i]}</li></ul>`);
}};
let myArray = [1, 'Hello', true, 5, false, 'World'];
massArray(...myArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = (...object) => {for (let i = 0; i < object.length; i++) {
    document.write('<div>ID: ' + object[i].id + '</div>');
    document.write('<div>Name: ' + object[i].name + '</div>');
    document.write('<div>Age: ' + object[i].age + '</div>');
}};
let massObject = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 28}
];
users(...massObject);


// - створити функцію яка повертає найменьше число з масиву

const minNumber = (array) => {
    if (array.length === 0){
        return undefined;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
};
console.log('');
let massNumbers = [10, 32, 12, 4, 25, 1];
console.log(minNumber(massNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
}
return total;
};
console.log('');
console.log(sum([10, 3, 4, 7, 6]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log("Індекси перевищують діапазон масиву");
        return arr;
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    if (!exchangeRate) {
        console.log("Курс для вказаної валюти відсутній");
        return null;
    }
    let sumExchange;
    sumExchange = sumUAH / exchangeRate;
    return sumExchange;
}
let currencyRates = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
]
let sumInUAH = 10000;
let exchangeCurrency = 'USD';
console.log(exchange(sumInUAH, currencyRates, exchangeCurrency));