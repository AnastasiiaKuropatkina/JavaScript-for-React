// this - контекст выполнения функции
// 'use strict'
function f() {
    console.log(this);//undefined
}
f();

function f() {
    console.log(this);//undefined
}
let o = {
    yo: f //метод объекта, this сам объект
}
o.yo(); //{yo: ƒ}

f.call({}); //{} Object
f.apply({}); //{} Object

//__proto__ прототипное наследование ссылаеться на главний Object protoType (режим чтения)
//protoType - для функций, сссылается на почти пустой объект

//типы данних
//прототипное наследование
//робота з дом: что возращает метод который делает выборку елементов

new f;//функция конструктор
//1. this = {} новый объект
//2. return this
//3. this.__proto__ = f.prototype; ссылка __proto__ ссылаеться на тот объект, который лежит в функции, следовательно в етот объект мы можем дописывать функции

function Person(firstName, lastName, born) {
    //this = {}
    // this.__proto__ = Person.prototype

    this.firstName = firstName;
    this.lastName = lastName;
    this.born = born;

    //return this
}
Person.protopype.age = function () {
    let now = new Date();
    return now.age = this.born;
}
const iam = new Person("Anastasiia", "Kuropatkina" , 1988);
iam.age();

class Person2 {
    constructor(firstName, lastName, born) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.born = born;
    }

    age() {
        let now = new Date();
        return now.age = this.born;
    }

}
let iam = new Person2("Anastasiia", "Kuropatkina" , 1988);
iam.age();