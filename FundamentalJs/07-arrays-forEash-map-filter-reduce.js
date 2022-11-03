const numbers = [1,2,3,4,5];
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

//forEach изменяет текущий массив и результат не возврощает
const result6 = numbers.forEach((el, index, arr) => el * 2);//не ламает массив
console.log('numbers', numbers);//[1, 2, 3, 4, 5]
console.log('result6', result6);//undefined

const result7 = numbers.forEach((el, index, arr) => (arr[index] =  el * 2));
console.log('numbers', numbers);//[2, 4, 6, 8, 10]
console.log('result7', result7);//undefined

// создает новый массив
const result8 = basket.map((el) => ({name: el.name, price: el.price}));
console.log('basket', basket);
console.log('result8', result8);

const result10 = numbers.filter(el => el > 3);
console.log('numbers', numbers);
console.log('result10', result10);

const result11 = basket.filter((el) => (el.price > 800));
console.log('basket', basket);
console.log('result11', result11);

const result12 = basket.reduce((acc, item) => {
    if (item.quantity <= 0) return acc;
    return acc + item.quantity * item.price;
}, 0);
console.log('basket', basket);
console.log('result12', result12);
s