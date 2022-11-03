const myObj = {
    a: 1,
    b: 2,
    c: {
        a: 0,
        b: 10,
    },
    d: 4,
    n: [1, 2, 3]
}
const a = myObj.a;
const b = myObj.b;

const {
    d:newName = 0,
    a:firstA = 0,
    c: { a: secondA = 0 } = {},
    n: [, deepB = 0] = {},
    ...arg
} = myObj || {};//по умолчанию пустой обьект

let a, b;
({a, b} = myObj); //если переменные уже существуют

function  fn1({key1, key2}) {}//деструктуризация до прихода об'єкта
function fn2([a, b]) {}