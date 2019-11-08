import React from 'react';
import './Main.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Shopping from './Shopping/Shopping';
import Home from './Home/Home';
import {Route, Switch } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <h1>Main component</h1>

        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/shopping' component={Shopping} />
          
         </Switch>
         
      </div>

    )
  }
}

export default Main;