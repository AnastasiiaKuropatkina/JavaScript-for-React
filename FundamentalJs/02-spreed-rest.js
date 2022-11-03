const numbers1 = [1,2,3,4,5];
const numbers2 = [7,8,9];
const numbers3 = [...numbers1, ...numbers2];

const allNumbers = [...numbers1, ...numbers2];
const maxNum = Math.max(...numbers1);
const minNum = Math.min(...numbers1);

function sum(a,b,c) {
    return a + b + c
}
sum(...numbers2);

const obj1 = {
    name: 'Anna',
    x: 20
}
const obj2 = {
    name: 'Boris',
    x: 2
}

const newObjectClone1 = obj1;
const newObjectClone1 = {...obj1};
const newObjectClone2 = Object.assign({}, obj1); //object
console.log(JSON.stringify(obj2)); //json {"name":"Boris","x":2}
const mergeObj = {...obj1, ...obj2}; //перезапишет {name: 'Boris', x: 2}

function sum(a, b, ...args) {
    let result = a + b;
    for(let i = 0; i < args.length; i++) {
        result += args[i]
    }
    console.log(args.length);//3
    return result
}