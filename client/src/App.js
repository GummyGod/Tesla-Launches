import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import logo from './logo.jpg';

import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="SpaceX" style={{width:300, display:'block', margin:'auto'}} />
            <Route exact path="/" component={Launches} />            
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
