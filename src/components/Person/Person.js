import React, { Component } from 'react';

class Person extends Component {

    constructor() {
        super();
        this.state = { star: {name: '', role: ''} };
    }

    handleNameChange = (event) => {
        let role = this.state.star.role;
        this.setState({star: {name: event.target.value, role}});
    }

    handleRoleChange = (event) => {
        let name = this.state.star.name
        this.setState({star: {role: event.target.value, name}});
    }

    logName = (event) => {
        console.log(this.state.star);
    }

    render() {
        return (
            
            <div>
                Name: <input onChange={this.handleNameChange} />
                Role: <input onChange={this.handleRoleChange} />
                <button onClick={this.logName}>Submit</button>
                <br />{this.state.star.name} is famous for {this.state.star.role}.
            </div>
        );
    }
}

export default Person;