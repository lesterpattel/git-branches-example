import React, { Component } from 'react'
import './Container.css';
import Header from './Header/Header'
import Main from './Main/Main';

export default class Container extends Component {
    render() {
        return (
            <div className="container">
              <h1>Container Component</h1>
              <Header />
              <Main />
            </div>
        )
    }
}
