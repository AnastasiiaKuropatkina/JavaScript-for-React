// expression hoisting
//function declarations функция с названием можно вызвать до объявления
sum2(1,2)
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
const result = sum(3,5);
const sum3 = (a, b) => {
    return a + b;
}

var sum4 = function (a, b) {
    return a + b;
}

function sum5(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}
const sum6 = (a = 0, b = 0) => a + b;
// пример с одним аргументом
const square = num => num * num;
// пример без аргумента
function printHello() {
    console.log('hello');
}
const printHello2 = () => {
    console.log('hello');
}
const numbers = [1, 8, 3, 4, 9, 15, 44, 10];
//
numbers.sort(sortAbc); //тут вызов named function
function sortAbc(a,b) {
    return a - b;
}
// анонимная функция
numbers.sort(function (a,b) {
    return a - b
});
// стрелочная функция
numbers.sort((a,b) => a - b);

var person = {
    name: 'Mark',
    age: 2,
    languages: ['HTML', 'CSS', 'JS'],
    greet: function () {
        console.log(this.name);
    }
}

const person2 = {
    name: 'Mark',
    age: 2,
    languages: ['HTML', 'CSS', 'JS'],
    greet () {
        console.log('this from greet', this);
        console.log('this from this.name',  this.name);
        this.languages.forEach(() => {
            console.log('this from foreach', this)
        })
    },
}