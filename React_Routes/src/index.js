import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

class Home extends Component{
  render(){
    return(
      // your code goes here
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/happy">Happy</NavLink></li>
            <li><NavLink exact to="/guilty">Guilty</NavLink></li>
            <li><NavLink exact to="/sleepy">Sleepy</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/happy" component={Happy} />
          <Route exact path="/guilty" component={Guilty} />
          <Route exact path="/sleepy" component={Sleepy} />
        </Switch>
      </div>
      </BrowserRouter>
    )}}

ReactDOM.render( <Home />, document.getElementById('root') );
