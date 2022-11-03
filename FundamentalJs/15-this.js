// this ссылается на тот объект в рамках которого он существует
//this - Window
'use strict';

function atak() {
    console.log(this)
}
atak()// в Window добавиться функция atak()

const obj = {
    a: 1,
    b: 2,
    print() { //метод
        console.log(this)
    }
}
obj.print();
obj.print = function () {
    setTimeout(() => console.log(this), 1000);//переписуем функцию print, и this уже ссылаеться не на обьект, а на window. нужна стрелочная функция
}

const btn = document.querySelector('button');
function log() {
    console.log('btn clicked');
    console.dir(this);
    setTimeout(() => console.log(this),100)
}
//old
function log1() {
    console.log('btn clicked');
    console.dir(this);
    const that = this;
    setTimeout(function() {
        console.log(that);
    },100);
}
log();
btn?.addEventListener('click', log);

function printThis(){console.log(this)}
printThis();
const myNewObj = {a: 1, b: 2}
printThis = printThis.bind(myNewObj);//.bind() привязать контекст this к объекту
printThis();

const person = {
    name: "Jon",
    prof: "web",
    hi () {console.log('Hello, my name is ' + this.name)}
}
person.hi();

const person2 = {
    name: "Peter"
}
person.hi.call(person2);//вызываем this с другого объекта
person.hi.apply(person2);//вызываем this с другого объекта
person2.hi = person.hi.bind(person2);//привязать метод hi c person k person2

const numbers = [1,2,3];
Math.max(...numbers);//3
Math.max.apply(null, numbers);//разворачивает массив
Math.max.call(null, 1,2,3);