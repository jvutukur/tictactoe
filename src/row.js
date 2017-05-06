import React, { Component } from 'react';
import Square from './square';
class Row extends Component {

    render() {
        return (
<div className="row">

<Square number={this.props.numb} />
    <Square number={this.props.numb1} />
    <Square number={this.props.numb2} />
</div>



        );
    }
}

export default Row;