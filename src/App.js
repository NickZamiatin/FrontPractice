import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import { Loading } from './components/Loading';
import NotFound from './components/NotFound';
import Events from './containers/Events';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main className="container">
      <Switch>
        <Route exact path="/" component={Loading}/>
        <Route path="/events" component={Events}/>
        <Route path="*" component={NotFound} />
      </Switch>
      </main>
      </div>
    );
  }
}

export default App;
