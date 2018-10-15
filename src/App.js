import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Loading } from './components/Loading';
import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main className="container">
      <Switch>
        <Route   exact path="/" component={Loading}/>
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <Loading /> */}
      </main>
      </div>
    );
  }
}

export default App;
