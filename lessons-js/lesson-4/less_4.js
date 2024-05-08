// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square (side_a, side_b) {
    let result = side_a * side_b;
    return result;
}
let res = square(2, 3);
console.log(res);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle (r) {
    let result2 = 3.14 * (r * r);
// или как подсказал google скорее всего правильно, но мы это не учили
//     let result2 = Math.PI * Math.pow(r, 2);
    return result2;
}
let res2 = squareCircle(2);
console.log(res2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder (r, h) {
    let result3 = 2* 3.14 * r * r + 2 * 3.14 * r * h;
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
let parText = paragraph('Как то так. Надо больше практики.')

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



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250