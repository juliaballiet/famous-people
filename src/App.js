import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Person from './components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Person />
      </div>
    );
  }
}

export default App;
