import React, { Component } from 'react';
import './static/css/App.css';
import Header from './Header';
import ContentBody from './ContentBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentBody />
      </div>
    );
  }
}

export default App;
