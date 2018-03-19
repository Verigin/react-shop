import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = { email : ''};
    this.onChange = this.onChange.bind(this);
  }
  onChange (event) {        
    // this.props.testStore.dispatch({type: 'ADD_TRACK', playload: event.target.value});
  }  
  render() {
    console.log("текущее состояние",this.props.testStore);
    return (
      // <div className="container">      
      //   <DropDown menu={menu}/>
      // </div>   
      <div>
        <input type="text" />
        <button /* onClick={this.onChange}*/>Add track</button>
        <ul>
          {this.props.testStore.map((item,index)=>
            <li key={index}>{item}</li>
          )}
        </ul> 
      </div> 
    )
  }
}

export default connect (
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);