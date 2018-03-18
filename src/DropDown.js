import React, { Component } from 'react';

class DropDown extends Component {
    constructor (props) {
        super (props);
        this.state = { 'isOpened' : false, 'background' : 'white' };
    }
    toggleState () {
        this.setState({ 'isOpened' : !this.state.isOpened })
        this.setState({ 'background' : 'black' })
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        let dropdowntext;
        if ( this.state.isOpened ) dropdowntext='isOpened';  
    return (        
        <div onClick={this.toggleState.bind(this)} >
        DropDown
        {dropdowntext}
        </div>
    )
  }
}

export default DropDown;