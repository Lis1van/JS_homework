// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//   Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача

let allObject = [10, 20, 'Ivan', true, 3.15, 'Litvinenko', false, false, 1981, 'Sergeevich'];
console.log(allObject);
console.log(allObject[0]);
console.log(allObject[1]);
console.log(allObject[2]);
console.log(allObject[3]);
console.log(allObject[4]);
console.log(allObject[5]);
console.log(allObject[6]);
console.log(allObject[7]);
console.log(allObject[8]);
console.log(allObject[9]);

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
let book11 = {
    title: 'Практикантка',
    pageCount: 126,
    genre: 'Боевая фантастика',
    authors: ['name: Каменистый Артем', 'age: 39'],
}
let book12 = {
    title: 'Эпоха мертвых',
    pageCount: 238,
    genre: 'Боевая фантастика',
    authors: ['name: Круз Андрей', 'age: 23'],
}
let book13 = {
    title: 'Голодные игры',
    pageCount: 109,
    genre: 'Боевая фантастика',
    authors: ['name: Коллинз Сьюзен', 'age: 41'],
}
console.log(book1,book2,book3,book11,book12,book13);

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
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//   (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".