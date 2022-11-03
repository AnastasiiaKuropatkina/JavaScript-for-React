//Array is array
const books = ['book', 'book', 'book'];

Array.isArray(books); //true
Object.prototype.toString.call(books) === '[object Array]';//true

//And of array

const arr = [1,2,3,4];
arr[arr.length - 2];//3
arr.slice(-2);//3,4
arr.slice(-2)[0];//3
arr.at(-2)//3

const string = 'string';
string.at(-2); //n

//Flat array
const nested = [['flat', 'flat'], ['flat']];
const flattened = nested.flat();//['flat', 'flat', 'flat']

// Инициализируем поле
const field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// Делаем ход:
field[1][2] = 'x';
// [
//     [null, null, null],
//     [null, null, 'x'],
//     [null, null, null],
// ]

const didPlayerMove = (field, symbol) => {
    // Обходим поле. Каждый элемент — это строчка в игровом поле.
    for (const row of field) {
        // метод includes проверяет присутствует ли элемент в массиве,
        if (row.includes(symbol)) { // Если присутствует, значит мы нашли то, что искали.
            return true;
        }
    }

    // Если поле было просмотрено, но ничего не нашли,
    // значит ходов не было.
    return false;
}
didPlayerMove(field, 'x'); // true
didPlayerMove(field, 'o'); // false

const k1 = {fruit: "apple"};
const k2 = {fruit: "apple"};
k1 === k2;
//false
JSON.stringify(k1) === JSON.stringify(k2);
//true

//Use Lodash
_.isEqual(k1, k2);

// Хибні значення в массиві
// 0, ' ', null, undefined, false, Nan
const arrFiltered = [1, 0, 2, '', 3, null, 4, undefined];
const filtered = arrFiltered.filter(Boolean); //[1, 2, 3, 4]

//Видалення десяткової частини з числа
const price = 25.4;
const newPrice = ~~price;
Math.floor(25.4);

//Видалення дублювань в масиві
const letters = ['a', 'b', 'b', 'c', 'a', 'b', 'b', 'c',];
const uniqueLetters = [...new Set(letters)];//['a', 'b', 'c']
const arr2 = [1,2,3,2,5,6,7,1,2,3,2,5,6,7]
const uniqueNumbers = [...new Set(arr2)] //[1, 2, 3, 5, 6, 7]

//Сортування в массиві
arrSort = [4, 20, 3, 35, 90, 80, 8, -8];
arrSort.sort(); //[20, 3, 35, 4, 8, 80, 90]
const sortedArr = arrSort.slice().sort((a,b) => a - b); //[-8, 3, 4, 8, 20, 35, 80, 90]

const variable = 'cookie';
const snack = {
    cookie: 'wow'
}

// Доступ до властивості об'єкта
snack.cookie; //'wow'
// Крапка доступ до властивості об'єкта
snack[variable] //'wow'
// Дужка доступ до властивості зі змінною variable

//Логічне нульове приствоєння ??
let a = undefined;
a ??=7;

let b = null
b ??=23

// Upper case
const original = 'Simple title';
const upper = original.toUpperCase();
// 'SIMPLE TITLE'

null.toUpperCase(); //Type Error
undefined.toUpperCase(); //Type Error
(3000).toUpperCase(); //Type Error

//.join('-'); Об'єднує елементи массиву
const strings = ['гори', 'і', 'море'];
string.join();//'гори,і,море'
strings.join(' ')//гори і море

const obj1 = {
    test1: 1
}
const obj2 = {
    test1: 2
}
function f() {
    console.log("this ==>", this.test);
}
f.bind(obj1).call(obj2);//this ==> undefined

console.log('A');
const promise = new Promise((resolve) => {
    console.log('C');
    setTimeout(() => {
        console.log('E');
    },0);

    resolve(() => console.log('G'))
})
console.log('D');
//A C D ... E