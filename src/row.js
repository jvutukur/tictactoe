import React, { Component } from 'react';
import Square from './square';
class Row extends Component {

    renderSquare(i) {
        return <Square propValue={i} />;
    }

    render() {

        const status = 'Next player: X';
        var one = this.props.numb;
        var two = this.props.numb1;
        var three = this.props.numb2;
        return (
    <div className="row">
        {this.renderSquare(one)}
        {this.renderSquare(two)}
        {this.renderSquare(three)}
    </div>



        );
    }
}

export default Row;