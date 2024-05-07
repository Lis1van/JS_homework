// --створити масив з:
//     - з 5 числових значень

let numbers = [11,2,3,4,5];
console.log(numbers);

// - з 5 стічкових значень

let strings = ['orange', 'green', 'red', 'blue', 'purple'];
console.log(strings);

// - з 5 значень стрічкового, числового та булевого типу

let allMeanings = [5, 'hair', false, 13, true];
console.log(allMeanings);

// - та вивести його в консоль
//



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let nothing = [];
nothing[0] = 'vasya';
nothing[1] = 1;
nothing[2] = true;
console.log(nothing);


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let numbers2 = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

let a = 0;
while (a < numbers2.length) {
    console.log(numbers2[a]);
    a++;
}
console.log('');

//     2. перебрати його циклом for

for (let j = 0; j < numbers2.length; j++) {
    console.log(numbers2[j]);
}
console.log('');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i = 1;
while (i < numbers2.length) {
    if (i % 2 !== 0 ) {
        console.log(numbers2[i]);
    }
    i += 2;
}
console.log('');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let k = 1; k < numbers2.length; k += 2) {
    console.log(numbers2[k]);
}
console.log('');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let w = 0;
while (w < numbers2.length) {
    if (numbers2[w] % 2 === 0 ) {
        console.log(numbers2[w]);
    }
    w++;
}
console.log('');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let r = 0; r < numbers2.length; r++) {
    if (numbers2[r] % 2 === 0) {
        console.log(numbers2[r]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let t = 0; t < numbers2.length; t++) {
    if (numbers2[t] % 3 === 0) {
        numbers2[t] = 'okten';
    }
}
console.log(numbers2);

// 8. вивести масив в зворотньому порядку.

for (let y = numbers2.length - 1; y >= 0; y--) {
    console.log(numbers2[y]);
}
console.log('');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numbers3 = [2,17,13,6,22,31,45,66,100,-18];
let u = numbers3.length - 1;
while (u >= 0) {
    console.log(numbers3[u]);
    u--;
}
console.log('');

for (let q = numbers3.length -1;q >= 0; q--) {
    console.log(numbers3[q]);
}
console.log('');

let s = numbers3.length - 1;
while (s >= 0) {
    if (s % 2 !== 0 ) {
        console.log(numbers3[s]);
    }
    s--;
}
console.log('');

for (let d = numbers3.length - 1; d >= 0; d -= 2) {
    console.log(numbers3[d]);
}
console.log('');

let f = numbers3.length - 1;
while (f >= 0) {
    if (numbers3[f] % 2 === 0 ) {
        console.log(numbers3[f]);
    }
    f--;
}
console.log('');

for (let z = numbers3.length - 1; z >= 0; z--) {
    if (numbers3[z] % 2 === 0) {
        console.log(numbers3[z]);
    }
}
console.log('');

for (let x = numbers3.length - 1; x >= 0; x--) {
    if (numbers3[x] % 3 === 0) {
        numbers3[x] = 'okten';
    }
}
console.log(numbers3);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers4 = [21, 13, 15, 34, 25, 64, 73, 45, 27, 44]
// for (const number of numbers4) {
//     console.log(numbers4[number]);
// }
for (let v = 0; v < numbers4.length; v++) {
    const numbers4Element = numbers4[v];
    console.log(numbers4Element);
}
console.log('');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strings2 = ['orange', 'green', 'red', 'blue', 'purple', 'tomato', 'potato', 'juice', 'tea', 'coffee'];
for (let b = 0; b < strings2.length; b++) {
    const strings2Element = strings2[b];
    console.log(strings2Element);
}
console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let bool = [true, false, false, false, false, false, true, true, false, false];
for (let n = 0; n < bool.length; n++) {
    console.log(bool[n]);
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let mixedArray = [42, 'hello', true, 3.14, false, 'world', 10, true, 'foo', false];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'boolean') {
        console.log(mixedArray[i]);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let mixedArray2 = [42, 'hello', true, 3.14, false, 'world', 10, true, 'foo', false];

for (let i = 0; i < mixedArray2.length; i++) {
    if (typeof mixedArray2[i] === 'number') {
        console.log(mixedArray2[i]);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let mixedArray3 = [42, 'hello', true, 3.14, false, 'world', 10, true, 'foo', false];

for (let i = 0; i < mixedArray3.length; i++) {
    if (typeof mixedArray3[i] === 'string') {
        console.log(mixedArray3[i]);
    }
}
console.log('');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyArray = [];

emptyArray[0] = 42;
emptyArray[1] = "hello";
emptyArray[2] = true;
emptyArray[3] = 3.14;
emptyArray[4] = false;
emptyArray[5] = "world";
emptyArray[6] = 10;
emptyArray[7] = null;
emptyArray[8] = undefined;
emptyArray[9] = { key: "value" };

for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}
console.log('');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log("Поточний номер кроку: " + (i + 1));
    document.write("Поточний номер кроку: " + (i + 1) + "<br>");
}
console.log('');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log("Поточний номер кроку: " + (i + 1));
    document.write(`<div>Поточний номер кроку: ${i + 1}</div>`);
}
console.log('');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log("Поточний номер кроку: " + (i + 2));
    document.write(`<div>Поточний номер кроку: ${i + 2}</div>`);
}
console.log('');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log("Поточний номер кроку (парний): " + (i + 1));
        document.write("Поточний номер кроку (парний): " + (i + 1) + "<br>");
    }
}
console.log('');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log("Поточний номер кроку (парний): " + (i + 1));
        document.write("Поточний номер кроку (парний): " + (i + 1) + "<br>");
    }
}
console.log('');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: '1984',
        pageCount: 328,
        authors: ['Джордж Оруэлл'],
        genres: ['Антиутопия', 'Политическая фантастика']
    },
    {
        title: 'Убить пересмешника',
        pageCount: 281,
        authors: ['Харпер Ли'],
        genres: ['Южная готика', 'Драма']
    },
    {
        title: 'Великий Гэтсби',
        pageCount: 180,
        authors: ['Ф. Скотт Фицджеральд'],
        genres: ['Трагедия', 'Модерн']
    },
    {
        title: 'Гарри Поттер и философский камень',
        pageCount: 320,
        authors: ['Дж.К. Роулинг'],
        genres: ['Фентэзи', 'Приключение']
    },
    {
        title: 'Хоббит',
        pageCount: 310,
        authors: ['Дж.Р.Р. Толкин'],
        genres: ['Фентэзи', 'Приключение']
    },
    {
        title: 'Ловец во ржи',
        pageCount: 277,
        authors: ['Дж. Д. Сэлинджер'],
        genres: ['Романтика']
    },
    {
        title: 'Гордость и предубеждение',
        pageCount: 279,
        authors: ['Джейн Остин'],
        genres: ['Романс', 'Сатира']
    },
    {
        title: 'Преступление и наказание',
        pageCount: 671,
        authors: ['Федор Достоевский'],
        genres: ['Философская фантастика', 'Психологическая фантастика', 'Семейная сага']
    },
    {
        title: 'Братья Карамазовы',
        pageCount: 796,
        authors: ['Федор Достоевский'],
        genres: ['Философская фантастика', 'Семейная сага']
    },
    {
        title: 'Властелин колец',
        pageCount: 1178,
        authors: ['Дж.Р.Р. Толкин'],
        genres: ['Фентэзи', 'Приключение']
    }
];

// -знайти наібльшу книжку.

let maxPageCount = 0;
let maxPageCountBook = null;

for (let i = 0; i < books.length; i++) {
    if (books[i].pageCount > maxPageCount) {
        maxPageCount = books[i].pageCount;
        maxPageCountBook = books[i];
    }
}
console.log('Найбільша книга за кількістю сторінок:');
console.log(maxPageCountBook);

// - знайти книжку/ки з найбільшою кількістю жанрів

// let maxGenresCount = 0;
// let maxGenresBooks = [];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].genres.length > maxGenresCount) {
//         maxGenresCount = books[i].genres.length;
//         maxGenresBooks = [books[i]];
//     }  else if (books[i].genres.length === maxGenresCount) {
//         maxGenresBooks.push(books[i]);
//     }
//     if (maxGenresBooks.length === 0) {
//         console.log("Жодна книга не містить жодного жанру.");
//     } else {
//         console.log("Книга(-и) з найбільшою кількістю жанрів:");
//         console.log(maxGenresBooks);
//     }
// }
// console.log("Книга з найбільшою кількістю жанрів:");
// console.log(maxGenresBooks);

// - знайти книжку/ки з найдовшою назвою

let maxLength = 0;
let longestTitleBooks = [null];

for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxLength) {
        maxLength = books[i].title.length;
        longestTitleBooks = [books[i]];
    } else if (books[i].title.length === maxLength) {
        longestTitleBooks.push(books[i]);
    }
}

console.log("Книга(-и) з найдовшою назвою:");
console.log(longestTitleBooks);

// - знайти книжку/ки які писали 2 автори

let booksByTwoAuthors = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        booksByTwoAuthors.push(books[i]);
    }
}
console.log("Книга, написана двома авторами:");
console.log(booksByTwoAuthors);

// - знайти книжку/ки які писав 1 автор

let booksByOneAuthor = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        booksByOneAuthor.push(books[i]);
    }
}
console.log("Книга, написана одним автором:");
console.log(booksByOneAuthor);