import React, { Component } from 'react';

class Person extends Component {

    constructor() {
        super();
        this.state = { name: '', role: '' };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleRoleChange = (event) => {
        this.setState({ role: event.target.value });
    }

    logName = (event) => {
        console.log(this.state.name);
    }

    render() {
        return (
            
            <div>
                Name: <input onChange={this.handleNameChange} />
                Role: <input onChange={this.handleRoleChange} />
                <button onClick={this.logName}>Submit</button>
                <br />{this.state.name} is famous for {this.state.role}.
            </div>
        );
    }
}

export default Person;