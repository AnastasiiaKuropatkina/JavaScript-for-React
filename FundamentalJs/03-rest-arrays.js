const numbers = [1,2,3,4,5];
numbers[2]; //3
const first = numbers[0];
const tail = numbers.slice(2);// 3,4,5

const [first1, second2, ...args] = numbers || [];//если массив не пустой
[...arg]; // [4, 5]
console.log(...args); //4 5

const newNumbers = [1,[2,4],3,4,5];
newNumbers[1][0]; //2
const [newFirst = 0,
    [deepFirst = 0, deepSecond = 0] = [],
    ...newArgs
] = newNumbers || [];

const x = 10;
const y = 20;
[y,x] = [x,y];//x = 20, y = 10

let tmp = x;
x = y;
y = tmp;

const arr1 = [[3]];
arr1[0][0]

const arr1 = [[3]];
arr1[0].push(10); //добавление елемента
// [[3, 10]]