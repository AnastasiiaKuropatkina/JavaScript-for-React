// Higher order function - принемает функцию через аргумент, или создает внутри return функцию (замыкание)
// Callback function - функция аргумент, проп которая передаеться как инструкция
function twoSquared() {
    return 2*2
}
twoSquared();

function  copyArrayAndSquareNums(arr) {
    const output = [];

    for (let i = 0; i < arr.length; i++)  {
        output.push(arr[i] ** 2);
    }
    return output;
}
const nums = [1,2,3,4];
const res = copyArrayAndSquareNums(nums)

function copyArrayAndDivideByTwo(arr) {
    const output  = [];
    for (let i = 0; i < arr.length; i++)  {
        output.push(arr[i] / 2);
    }
    return output;
}
const res2 = copyArrayAndDivideByTwo(arr);

function copyArrayAndDoSmth(arr, instraction) {
    const output  = [];
    for (let i = 0; i < arr.length; i++)  {
        output.push(instraction(arr[i]));
        console.log("arr[i]", arr[i]);
    }
    return output;
}

function numSquared(num) {
    return num * num
}
function divideBy2(num) {
    return num / 2;
}

const result = copyArrayAndDoSmth([1, 2, 3], numSquared);
const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);