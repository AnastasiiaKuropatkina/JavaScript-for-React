const numbers = [1,2,3,4,5];
const langs = ['html', 'css', 'js'];
const basket = [
    {
        id: 1,
        name: 'js book',
        price: 300,
        quantity: 1
    },
    {
        id: 2,
        name: 'css book',
        price: 200,
        quantity: 2
    }
];

const result1 = numbers.indexOf(3);//4
const result2 = numbers.includes(7);//false
const result3 = langs.includes('html');//true

console.log('result', {a:1} === {a:1});//false
const result4 = basket.find(el => el.id === 2);//выведет весь кусок с id: 2
const result5 = basket.findIndex(el => el.id === 1);//true
console.log('result4', result);//{id: 2, name: 'css book', price: 200, quantity: 2}


