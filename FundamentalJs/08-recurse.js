let count = 0;
function recurse() {
    if (count === 5) return 'done';
    count ++;
    return recurse();
}
console.log(recurse());
console.log('count =', count);

//Math.pow(5, 3);//125
function pow(x, y) {
    if (y === 0) return 1;
    return x* pow(x, y-1)
}
const result = pow(5,3)

function sumOfDigits(numbers) {
    return String(numbers).length;
}
sumOfDigits(100)//3
sumOfDigits(1000)//4

function countDigits(numbers) {
    let log10 = Math.log(10);
    return Math.floor(Math.log(num) / log10) + 1;
}