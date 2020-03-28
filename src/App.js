import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Graph from './Components/Graph';
import Calculator from './Components/Calculator';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Calculator />
      </div>
    );
  }
}

export default App;
