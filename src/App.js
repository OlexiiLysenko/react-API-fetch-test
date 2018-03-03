import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
var query = 'javascript';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    query = this.state.value;
    fetch(API + query)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits }));
    event.preventDefault();
    
  }

  connectToTwitter() {
    // connecting to the twitter with npm tvit packaje
    var Twit = require('twit')
    
      var T = new Twit({
        consumer_key:         'PD0Wv1mqBzAb990b0buxHr8A3',
        consumer_secret:      'awOdLyAYj1FysdQBFvpqHQHlksVaYyEuKqhguG9Mjh3HdwFCDI',
        access_token:         '968576147247239168-vOK36aPJdqmqJDsvNDLG2HaD4ciqWYF',
        access_token_secret:  '0dEnuyX3yqNv6KNHzhrtIZ8ZNF9p2yl53oV1r9CGQreoH',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
  });

//  search twitter for all tweets containing the word 'banana' since July 11, 2011 
  var params = {
    q: 'angular',
    count: 5
  };

  T.get('search/tweets', params, gotData); 

  function gotData(err, data, response) {
    console.log(data)
  };
  }


  componentDidMount() {
    fetch(API + query)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

 render() {
    const { hits } = this.state;

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React App</h1>
        </header>
        <p className="App-intro">
        </p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Search Tweets: </span>
              <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Search" />
          </form>
          <br/>
       
        


     
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


