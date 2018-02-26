import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

 render() {
    const { hits } = this.state;

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


     
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}

export default App;


