import React, { Component } from 'react';
import reactLogo from './react-logo.svg';
import reduxLogo from './redux-logo.svg';
import './App.css';

// const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={reactLogo} className="App-react-logo" alt="logo" />
          <img src={reduxLogo} className="App-redux-logo" alt="logo" />
          <h2>React + Electron</h2>
        </div>
        <p className="App-intro">
          <b> Get started </b>
          {/* Version: {app.getVersion()} */}
        </p>
      </div>
    );
  }
}

export default App;
