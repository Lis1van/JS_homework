// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
console.log('');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
console.log('');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());
console.log('');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanStr = str.split(' ').filter(item => item !== '').join(' ');
console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str4) {
    // Розділяємо рядок на масив за пробілами
    let arr;
    arr = str4.split(" ");
    return arr;
}
let str4 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str4);
console.log(arr);
console.log('');

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbers.map(String);
console.log(strings);
console.log('');

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        return "error";
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log('');

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredCourses);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let transformedCourses = filteredCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedCourses);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck = [];
for (const suit of suits) {
    for (const value of values) {
        let color = (suit === 'spade' || suit === 'clubs') ? 'black' : 'red';
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}
// - знайти піковий туз
let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log("Піковий туз:", spadeAce);
// - всі шістки
let sixes = deck.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);
// - всі червоні карти
let redCards = deck.filter(card => card.color === 'red');
console.log("Всі червоні карти:", redCards);
// - всі буби
let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log("Всі буби:", diamonds);
// - всі трефи від 9 та більше
let highClubCards = deck.filter(card => card.cardSuit === 'clubs' && parseInt(card.value) >= 9);
console.log("Всі трефи від 9 та більше:", highClubCards);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suits2 = ['spade', 'diamond', 'heart', 'clubs'];
const values2 = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck2 = [];
for (const suit of suits2) {
    for (const value of values2) {
        let color = (suit === 'spade' || suit === 'clubs') ? 'black' : 'red';
        deck2.push({ cardSuit: suit, value: value, color: color });
    }
}
const packedDeck = deck2.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});
console.log(packedDeck);
console.log('');

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
const coursesWithSassModule = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSassModule);
// --написати пошук всіх об'єктів, в який в modules є docker
const coursesWithDockerModule = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDockerModule);
