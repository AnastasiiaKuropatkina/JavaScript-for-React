const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

function akaFetch() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve('hello from promice')
        }, 2000)
    });
}
akaFetch()
    .then((responce) => {
        console.log(responce);
        return responce + '!';
    })
.then(console.log)
.catch(console.error)
.finally(() => {
    console.error('operation complete');
})
//hello from promice
//hello from promice!
//operation complete