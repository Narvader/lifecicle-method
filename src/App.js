import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import Time from './Time';
import ZenQuote from './ZenQuote';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZenQuote />
      </div>
    );
  }
}

export default App;
