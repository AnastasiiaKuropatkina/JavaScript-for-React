function hello() {
    console.log('hello', this);
}

const person = {
    name: 'Nastia',
    age: '33',
    sayHello: hello(),
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}
const newFunction = person.logInfo.bind(lena, 'Frontend', '1111111')
newFunction();

person.logInfo.call(lena, 'Frontend', '1111111');//вызов сразу
person.logInfo.apply(lena, ['Frontend', '1111111']);//принимает параметри масивом

const array = [1,2,3,4];
function multBy(arr, n) {
    return arr.map(i => i * n )
}
console.log(multBy(array, 5));

Array.prototype.mulBy1 = function(n) {
    console.log('mulBy1', this);
    return this.map(i => i * n)
}
console.log(array.mulBy1(2))
