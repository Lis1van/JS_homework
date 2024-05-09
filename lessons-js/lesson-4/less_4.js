// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square (side_a, side_b) {
    // let result = side_a * side_b; // в таком виде intellij желтым подчеркивает result
    if (side_a > 0 && side_b > 0){
        return side_a * side_b;
    }
    let result;
    result = side_a * side_b; // а так не подчеркивает
    return result;
}
let res = square(2, 3);
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle (r) {
    let result2;
    result2 = 3.14 * (r * r);
// или как подсказал google скорее всего правильно, но мы это не учили
//     let result2 = Math.PI * Math.pow(r, 2);
    return result2;
}
let res2 = squareCircle(2);
console.log(res2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder (r, h) {
    let result3;
    result3 = 2* 3.14 * r * r + 2 * 3.14 * r * h;
    //дальше помог дружище Google, у нас будут занятие по этим Math
    // var lateralArea = 2 * Math.PI * r * h;
    // var baseArea = Math.PI * Math.pow(r, 2);
    // var result3 = lateralArea + 2 * baseArea;
    return result3;
}
let res3 = squareCylinder(3, 5);
console.log(res3);

// - створити функцію яка приймає масив та виводить кожен його елемент

function array (item) {
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
}
let numbers = [2, 4, 1, 5, 7, 8, 9, 10];
array(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (text) {
    document.write(`<p>${text}</p>`);
    return document.write;
}
paragraph('Как то так. Надо больше практики.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (itemLi) {
    // document.write(`<ul>`);
    //     for (let i = 0; i < 3; i++) {
    //         document.write(`<li>${li}</li>`);  // document.write выдает щшибку и выводит только одно значение li
    //         return document.write;
    //     }
    //     document.write(`</ul>`);
    // Google творит чудеса
    let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent =itemLi;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
list('Тренинг')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2 (li, quantityLi){
    document.write('<ul>');
        for (let i = 0; i < quantityLi; i++) {
            document.write('<li>' + li + '</li>');
        }
    document.write('</ul>') ;
}
list2('Текст для всех элементов', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function massArray (...item){
    document.write('<ul>');
    for (let i = 0; i < item.length; i++) {
        document.write('<li>' + item[i] + '</li>');
    }
    document.write('</ul>') ;
}
let myArray = [10, true, 'hello', 25];
massArray(...myArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function users (...object){
    document.write('<div>');
    for (let i = 0; i < object.length; i++) {
        document.write('<div>ID: ' + object[i].id + '</div>');
        document.write('<div>Name: ' + object[i].name + '</div>');
        document.write('<div>Age: ' + object[i].age + '</div>');
    }
    document.write('</div>');
}
let massObjects = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 28}
];
users(...massObjects);

// - створити функцію яка повертає найменьше число з масиву

function minNumber(array){
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
}
let massNumbers = [10, 32, 12, 4, 25, 1];
console.log('');
console.log(minNumber(massNumbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log('');
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2){
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

function exchange(sumUAH, currencyValues, exchangeCurrency) {
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
console.log(exchange(sumInUAH, currencyRates, exchangeCurrency));// Это задание без Google не обошлось, голова чуть не треснула.