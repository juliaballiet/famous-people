import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <Person />
        </p>
      </div>
    );
  }
}

export default App;
