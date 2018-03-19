import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown';

const menu = [
  {
  link : '/news/',
  label : 'news'
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">      
        <DropDown menu={menu}/>
      </div>
    )
  }
}

export default App;