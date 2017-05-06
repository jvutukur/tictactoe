import React, { Component } from 'react';
import './square.css';
class Square extends Component {

    render() {

        return (
            <div className="square">{this.props.number}</div>



        );
    }
}

export default Square;