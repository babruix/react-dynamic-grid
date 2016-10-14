import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <Grid height={window.innerHeight} width={window.innerWidth} />
    );
  }
}

export default App;
