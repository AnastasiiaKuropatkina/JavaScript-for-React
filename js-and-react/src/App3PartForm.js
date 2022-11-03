import React, {Component} from "react";
// при click this.state змынюэться на this.setState
// при onChange з поля input виводиться в div
class App3PartForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: 'Anna',
            firstName: '',
            email: ''
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = () => {
        console.log('Click', this);
        this.setState({
            userName: 'New Name'
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        //debugger;
    }
    onChange = (e) => {
        const {value, name} = e.target;
        console.log("name", name, "value", value)
        this.setState({
            [name]: value
        })
    }
    render() {
        console.log(this.state)
        return <div>
            <div>
                User, {this.state.userName}<br/>
                FirstName from input, {this.state.firstName}<br/>
                Email from input, {this.state.email}<br/>
                <button onClick = {this.onClickHandler}>Change name</button>
            </div>
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.firstName} onChange={this.onChange} name="firstName" type="text" placeholder='put your name'/>
                    <input value={this.state.email} onChange={this.onChange} name="email" type="text" placeholder='put your email'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    }
}
export default App3PartForm;