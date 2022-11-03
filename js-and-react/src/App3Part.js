import App3PartForm from "./App3PartForm";
import App3PartFetch from "./App3PartFetch";

class User {
    constructor(userName, userAge, userChannel) {
        this.name = userName;
        this.age = userAge;
        this.channel = userChannel;
    }
    getName() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(userName, userAge, userChannel, rights) {
        super(userName, userAge, userChannel);
        this.rights = rights;
    }

    getName() {//inheritance абстракція
        console.log('I am admin. My name is: ', this.name);
    }
    sayHello() {
        console.log(`Hellp, I am ${this.age} old`)
        console.log('Hellp, I am', this.age, 'old')
    }
}

function App3Part() {
    const fruit = ['banana','orange', 'apple'];

    let user = {
        name: 'Maksym',
        lastName: 'Rudnyi',
        age: 27,
        youtubeChannel: 'Maksym Rudnyi',
        gender: 'male',
        fruit
    }
    const maks = new User('Maksym', 27, 'Maksym Rudnyi');

    console.log(maks);
    maks.getName();

    const admin = new Admin('Admin user', 28, 'No Channel', 'writer');
    console.log(admin);
    admin.getName();
    admin.sayHello();

    return (
        <div className = "App">
            Hello
            <App3PartForm/>
            <App3PartFetch/>
        </div>
    )
}

export default App3Part;