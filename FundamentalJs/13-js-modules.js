// Common JS
// export module.export, exports

// import -require (nodeJS utils, packages, custom modules)
const fs = require('fs');
//const Percel = require('parsel');
//console.log(Percel);

const hello = require('./component/hello.js') //./hello.js
//console.log(hello.sayHello()); //вызов функции
console.log(hello);

const {sayGoodDay} = require('./component/sayGoodDay');
//через деструктуризацию
sayGoodDay();

// ES6 Modules
//export
//import
//re-export

//import welcome, {sayHi as hi, greeting} from "./component/welcome";
//import('./component/welcome').then((module) => console.log(module));
//sayHi();
//greeting()
//welcome()