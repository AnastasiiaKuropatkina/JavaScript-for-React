import React, {Component} from "react";
class App3PartFetch extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            user: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        //debugger;
        fetch(`https://swapi.dev/api/people/${this.state.id}`)
            .then((response) => response.json()
            .then((user) => {
                this.setState({
                    user
                })
                console.log('data =>', user)
            })
            .catch((error) => {
                console.log(error)
            })
            //debugger;
        )
    }
    onChange = (e) => {
        const {value} = e.target;
        this.setState({
            id: value
        })
    }
    render() {
        const {id, user} = this.state;
        return <div>
            <div>
                User, {id}<br/>
            </div>
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={id} onChange={this.onChange} name="id" type="text" placeholder='id'/>
                    <button>Submit</button>
                </form>
                <hr/>
                {JSON.stringify(user)}
            </div>
        </div>
    }
}
export default App3PartFetch;