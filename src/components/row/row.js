import React, { Component } from 'react';
import Square from './components/square/square';
class Row extends Component {

    constructor(props)
    {
        super();
        this.state = {
            one: props.numb,
            two: props.numb1,
            three: props.numb2,
        };

    };

    render() {

        this.state = {
            one: this.props.numb,
            two: this.props.numb1,
            three: this.props.numb2,
        };
        return (
    <div className="row">
        <Square propValue={this.state.one} rowClick={()=> this.props.appClick(this.state.one)}  />
        <Square propValue={this.state.two} rowClick={()=> this.props.appClick(this.state.two)} />
        <Square propValue={this.state.three} rowClick={() => this.props.appClick(this.state.three)} />
    </div>
        );
    }

}

export default Row;