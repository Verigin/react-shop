import React, { Component } from 'react';

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
      <div>      
        <DropDown menu={menu}/>
      </div>
    )
  }
}

export default App;