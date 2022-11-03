// Замыкание в JS
// 1.Функции возвращают новые функции
// 2.Возвращаемые функции помнят контекст, где были созданы

function createGreeting() {
    const message = 'hello';
    function greeting(str) {
        console.log(message, str)
    }
    return greeting;
}

const helloWorldId = createGreeting();
//console.log(typeof helloWorldId); //function
helloWorldId('world');// hello world
helloWorldId('John');// hello John

function addByX(num) {
    return function (x){
        return num + x
    }
}

const addByTwo = addByX(2);
const addByFive = addByX(5);

console.log(addByTwo(3));
console.log(addByTwo(5));
console.log(addByFive(6));
console.log(addByFive(2));

function Counter() {
    let count = 0;
    return function() {
        count ++;
        return count;
    }
}
const counter1 = Counter();
const counter2 = Counter();

function once(fn) {
    let hasBeenCalled = false;
    let cachedResult;

    return function (...args) {
        if(hasBeenCalled) return;
        hasBeenCalled = true;
        cachedResult = fn(...args);

        return cachedResult;
    }
}
const addByTwoOnce = once(num => num + 2);
addByTwoOnce(2);
addByTwoOnce(5);
addByTwoOnce(7);