import React, { Component } from 'react';
import './square.css';
var mov=0;
class Square extends Component {

    constructor(props){
        super();
        this.state = {
          stateValue:props.propValue,
        };
    }

     render() {
         this.state = {
             stateValue: this.props.propValue,
         };
        return (
            <div className="col-xs-4 square" onClick={() => this.props.rowClick() }>
                {this.state.stateValue}
            </div>
        );
    }

}

export default Square;