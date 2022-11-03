// 8. Conditions
function User({name, youtubeChannel, gender, ...rest}) {
    /* 1. Conditions with if (!name) */
        if (!name) { //!name якщо не має імені
            return null;
        }
    // console.info("console.info", rest);

    /* 2. Conditions with name ? true : false;
        return name ? (
            <h1>{name}</h1>
        ) : (
            <p>No Data</p>
        );
    */

    /* 3. Conditions with && or ||;
        console.log('gender', gender); //undefined
        const salut = `Hello, ${gender === 'male' ? 'men ' : 'women '}, ${name}`;

        return (name && gender) ? ( //&& and, || or
            <h1>{salut}</h1>
        ) : (
            <p>No name or gender</p>
        );
    */

    /* 4. Conditions with (value1 && value2) || value3; */
    //console.log('gender', gender); //undefined
    return (gender && <h1>{gender}</h1>) || <p>No data</p>

    return null;
}
//1 Variable declaration
let name;
name = "Oksana";
console.log('name = ', name);
//2 Data types
const age = 27;
const firstName = "Maks";
const isLoading = false;
//3 Strings. Double-quoted
const lastName = "book 'War and Peace'";
const part = 3;
//3 Strings. Backticks
const favoriteMovie = `Star Wars ${part} and ${lastName}`;
const salut = `Hello, ${name}, my age is ${age}`

function App() {
// 4. Objects
    //Completed property names
    const newVariable = "channel"; //name of key

    let numbers = [1,2,3];
    const fruit = ['banana','orange', 'apple'];
    let user = {
        name: 'Maksym',
        lastName: 'Rudnyi',
        age: 27,
        youtubeChannel: 'Maksym Rudnyi',
        //gender: 'male',
        isYouTube: true,
        fruit,
        myFruits: ['banana', 'orange'],
        [newVariable]: "Travels Code", //Completed property names
        ArrayNumbers: numbers,
        bestFriends: {
            name: 'Oksana',
            youtube: 'PythonProgrammerGirl'
        },
    }
    user.version = "2.0" //add in object
    delete user.age;

    let user2 = user;
    user2.name = 'Oksana'; //змінить name в 2 об"єктах
    //delete user2.isYouTube;

    console.log('user -->', user);
    //console.log('user2 -->', user2);
    //console.log(name)
    //console.log(firstName)

    let child = 'Mark';
    let child2 = child;
    child2 = 'Borys';

    //console.log('child -->', child);
    //console.log('child2 -->', child2);
// 4. Objects computed property names
    let variable = 'channel';
    variable = 'new value';
    const computedObjects = {
        movie: 'New',
        start: '2020',
        [variable]: 'Happy Year'
    }
    //console.log('computedObjects -->', computedObjects);
    const numb = [4, [2], [6, [4]], 5];
    const numb2 = JSON.parse(JSON.stringify(numb));
    //const numb3 = _cloneDeep(numb);
    console.log('numb =>' , numb);
    //console.log('numb2 =>' , numb2);
// 5. Arrays: Map, Push
    const arr = [1,2,3];
    arr.forEach(el => console.log(el));
    arr.map(el => el * 2);
    const [n,m] = arr;
    //const res = await fetch('http://jsonplaceholder.typicode.com/todos/1')
    //const fruit = ['banana','orange', 'apple'];
    const [banana, orange, ...restFruit] = fruit
    fruit.push('mango'); //add new value
    //console.log('fruit -->', fruit);

    const fruit2 = fruit.map(function (item, index,array) {
        return `Fruit${index}: ${item}`
    })
    //console.log('fruit2 -->', fruit2);
    const number = [1,2,3];
    const number2 = number.push('new');
    //console.log("number -->", number)
    //console.log("number2 -->", number2)
// 6. Destructuring assignment
// витягувати поля з обєктів, зберігати в окремі змінні, перейменовувати ці змінні, створювати нові поля, присвоювати цим полям нові дефолтні значення
    const {name: newName, lastName, city = 'Kyiv', bestFriends, bestFriends: {name: friendName }} = user // дефолтне значення змінних
// 7. Rest parameters and spread syntax
    const restObject = {
        num1: "one",
        num2: "two",
        num3: "tree",
        bestColor: {
            color1 : "red",
            color2 : "green",
            color3 : "black"
        }
    }
    const {num1, ...rest} = restObject;
    const spreadObject = {...restObject}
    console.log("restObject -->", restObject)
    spreadObject.num1 = "ten";
    spreadObject.bestColor.color1 = "ten";
    // problem
    const newSpreadObject = {
        ...restObject,
        bestColor: {
            ...restObject.bestColor
        }
    }
    console.log("spreadObject -->", spreadObject);
    console.log("newSpreadObject -->", newSpreadObject);
// Rest and spread syntax
    const newObject = {
       num: 1,
        color: {
           color1: "red",
           color2: "black"
        }

    }
    const spreadNewObject = {
        ...newObject,
        color: {
            ...newObject.color
        }
    }
    spreadNewObject.num = 10;
    spreadNewObject.color.color1 = 20
    console.log("newObject -->", newObject);
    console.log("spreadNewObject -->", spreadNewObject);
// 9. Loop for
    let html = [];
    for (let i = 0; i < fruit.length; i++) {
        html.push(<p key={i}>{i} - {fruit[i]}</p>)
        console.log("цикл for", i, fruit[i]);
    }
// 10 Function
    /* Declaration функція з іменем */
    sum (2,2);

    function sum(a, b) {
        console.log(a + b)
        return a + b;
    }
    /* Expression - анонімна функція */
    // multiple(3,3); // ReferenceError:

    const multiple = function (a, b) {
        return a * b;
    }
    multiple(3,3);

    /* Arrow function */
    const sum2 = (...rest) => {
        let sum = 0;
        for(let i =0; i < rest.length; i++) {
            sum += rest[i]
        }
        return sum;
    };

    console.log("Sum -->", sum2(2,3, 4));
    //sum2(1,1);

// 10. Default value and try-catch

    const myFruits = (fruit = []) => {//дефолтні параметри
        let html = [];
        try {
            for (let i = 0; i < fruit.length; i++) {
                html.push(<p key={i}>{i} - {fruit[i]}</p>)
                console.log("цикл for", i, fruit[i]);
            }
        } catch (e) {
            console.error('New error', e)
            html.push(<h2>No fruit</h2>)
        }

        return html;
    }
    const ILikeThoseFruits = myFruits(user2.fruit);

    const RegistredUser = ({name = "Guest"}) => <h1>{name}</h1>

  return (
    <div className="App">
      <div>Array - {fruit[1]} - orange</div>
      <div>variables in object 2 methods: {user.name} - {user['lastName']}</div>
      <div>variables with destructuring: {newName} - {lastName}, {age}, {city}</div>
        <p>object user --> bestFriends - {JSON.stringify(bestFriends)}</p>
        <p>rename value name: friendName - {friendName}</p>
        <div>String with backticks: {salut}</div>
        <div>Age: {age}</div>
        <div>Movie: {favoriteMovie}</div>
        <div>Channel: {user.youtubeChannel} - {user.version}</div>
        <div>Fruit 1: {fruit[1]}</div>
        <div>first fruit: {banana}</div>
        <div>second fruit: {orange}</div>
        <h2>Array with map:</h2>
        {
            fruit.map(function (item, index) {
                return <div key={item}>Fruit {index}: {item}</div>
            })
        }
        <div>rest in array - {restFruit[0]}</div>
        <div>rest in object - {num1}, {JSON.stringify(rest)}</div>
        <p>JSON.stringify-transform js object into JSON string {JSON.stringify(rest)}</p>
        <p>JSON.parse - takes JSON string and transforms it into js object</p>
        <User name={user.name} youtubeChannel = {user.youtubeChannel}/>
        <h2>8. Conditions:</h2>
        <User {...user} /* в компонент User2 передаємо props з об"єкту user */ />
        <h2>9. Loop for - Цикл for</h2>
        <div>{html}</div>
        <p>Errow function {sum2(1,1)}</p>
        <h2>10. Functions. Arrow function</h2>
        {ILikeThoseFruits}
        <RegistredUser name={user.name}/>
    </div>
  );
}

export default App;
