import React, { Component } from 'react';
import './index.css';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import ProgressBar from './progress-bar';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <main className="main">
            <ProgressBar progress={10}/>
            <div  className="two-columns">
                <Sidebar/>
                <Content/>
            </div>
        </main>
      </div>
    );
  }
}

export default App;