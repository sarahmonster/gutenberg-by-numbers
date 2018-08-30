import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LanguageChart from './components/languages';
import BlockDistributionChart from './components/block-distribution';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="chart">
          <LanguageChart />
        </div>

        <div className="chart">
          <BlockDistributionChart />
        </div>
      </div>
    );
  }
}

export default App;
