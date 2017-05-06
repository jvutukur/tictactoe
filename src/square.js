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
    nextMove(){
        if(mov%2==0)
        {
            this.setState({stateValue: 'X'})
        }
        else
            this.setState({stateValue: '0'})
    }

    render() {
        return (
            <div className="col-xs-4 square" onClick={() => {
                if (mov % 2 == 0) {
                    mov++;
                    this.setState({stateValue: 'X'})
                }
                else {
                    mov++;
                    this.setState({stateValue: '0'})
                }
            }

            }>

                {this.state.stateValue}
            </div>
        );
    }

}

export default Square;