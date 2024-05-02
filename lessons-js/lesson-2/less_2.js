// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let allObjects = [10, 20, 'Ivan', true, 3.15, 'Litvinenko', false, false, 1981, 'Sergeevich'];
console.log(allObjects);
console.log(allObjects[0]);
console.log(allObjects[1]);
console.log(allObjects[2]);
console.log(allObjects[3]);
console.log(allObjects[4]);
console.log(allObjects[5]);
console.log(allObjects[6]);
console.log(allObjects[7]);
console.log(allObjects[8]);
console.log(allObjects[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Практикантка',
    pageCount: 126,
    genre: 'Боевая фантастика',
}
let book2 = {
    title: 'Эпоха мертвых',
    pageCount: 238,
    genre: 'Боевая фантастика',
}
let book3 = {
    title: 'Голодные игры',
    pageCount: 109,
    genre: 'Боевая фантастика',
}
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//   Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'Практикантка',
    pageCount: 126,
    genre: 'Боевая фантастика',
    authors: ['name: Каменистый Артем', 'age: 39'], //имелось ввиду масив или обьект, потому что массив только в таком виде не выдает ошибку
}
let book12 = {
    title: 'Эпоха мертвых',
    pageCount: 238,
    genre: 'Боевая фантастика',
    authors: {name: 'Круз Андрей', age: 23},
}
let book13 = {
    title: 'Голодные игры',
    pageCount: 109,
    genre: 'Боевая фантастика',
    authors: {name: 'Коллинз Сьюзен', age: 41},
}
console.log(book11, book12, book13);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача

let users = [
    user1 = {
        name: 'іван',
        username: 'литвиненко',
        password: '123456',
    },
    user2 = {
        name: 'сергій',
        username: 'пупкін',
        password: '654321',
    },
    user3 = {
        name: 'вася',
        username: 'швед',
        password: '321654',
    },
    user4 = {
        name: 'петя',
        username: 'ворон',
        password: '654123',
    },
    user5 = {
        name: 'коля',
        username: 'клювел',
        password: '321456',
    },
    user6 = {
        name: 'евгеній',
        username: 'слізкий',
        password: '214365',
    },
    user7 = {
        name: 'антон',
        username: 'завгородний',
        password: '124356',
    },
    user8 = {
        name: 'володимір',
        username: 'піскун',
        password: '563412',
    },
    user9 = {
        name: 'артур',
        username: 'пірожков',
        password: '342156',
    },
    user10 = {
        name: 'гектор',
        username: 'петровіч',
        password: '654321',
    }
]
console.log(users);
console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням вичключаємо одразу

let weather = [
    monday = {
        morning: 10,
        noon: 23,
        evening: 13,
    },
    tuesday = {
        morning: 11,
        noon: 25,
        evening: 13,
    },
    wednesday = {
        morning: 9,
        noon: 21,
        evening: 11,
    },
    thursday = {
        morning: 14,
        noon: 26,
        evening: 12,
    },
    friday = {
        morning: 13,
        noon: 24,
        evening: 15,
    },
    saturday = {
        morning: 11,
        noon: 23,
        evening: 13,
    },
    sunday = {
        morning: 12,
        noon: 20,
        evening: 10,
    },
]
console.log(weather);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 9;  //я не зрозумів. Сюди 1, 0, -3 для перевірки
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
let a = 1;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
let a1 = 0;
if (a1 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
let a2 = -3;
if (a2 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 47;
if (time <= 15) {
    console.log('Перша частина');
} else if (time >= 16 && time <= 30) {
    console.log('Друга частина');
} else if (time >= 31 && time <= 45) {
    console.log('Третя частина');
} else if (time >= 46 && time <= 59) {  //если тут ставить только else без if выдает ошибку, а в лекции говорилось что последний должен быть просто else
    console.log('Четверта частина');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//   (у першу, другу чи третю).

let day = 9;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weakDay = 4;
switch (weakDay) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('nothing')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 9;
let num2 = 10;
if (num1 > num2){
    console.log(num1);
}if (num1 === num2){
    console.log('Однакові');
}else{
    console.log(num2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xx = 0;        //это до консультации
let xxx = !!xx;
if (xxx === false){
    console.log('default');
}
let bbb = false;  // это после консультации
if (!bbb){
    console.log('default');
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]["monthDuration"] > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[1]["monthDuration"] > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[2]["monthDuration"] > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[3]["monthDuration"] > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[4]["monthDuration"] > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[5]["monthDuration"] > 5){
    console.log('Супер');
}