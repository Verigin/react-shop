import React, { Component  } from 'react';

class DropDown extends Component {    
    constructor (props) {
        super (props);
        this.state = { email : ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit (event) {
        event.preventDefault();       
        console.log(this.state.email);  
    }    
    onChange (event) {        
        this.setState({email : event.target.value}); 
    }  
    render() {        
        return (        
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="email" onChange={this.onChange}/> 
                    <button >Ok</button>
                </form>    
            </div>
    )
  }
}

export default DropDown;