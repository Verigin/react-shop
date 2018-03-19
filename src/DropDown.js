import React, { Component } from 'react';

class DropDown extends Component {
    constructor (props) {
        super (props);
        this.state = { 'isOpened' : false, 'background' : 'white' };
    }
    toggleState () {
        this.setState({ 'isOpened' : !this.state.isOpened })
        //this.setState({ 'background' : 'black' })
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        console.log('menu', this.props.menu);
        let dropdowntext;
        if ( this.state.isOpened ) dropdowntext='isOpened';  
    return (        
        <div onClick={this.toggleState.bind(this)} >
        {this.props.menu.map((menu, index) =>
            <a href={menu.link} key={index}>{menu.label}</a>
        )}
        DropDown
        {dropdowntext}
        </div>
    )
  }
}

export default DropDown;