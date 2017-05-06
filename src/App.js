import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './row'


class App extends Component {

    constructor()
    {
        super();
        this.state = {
          squares : Array(9).fill(null),
        };
        for(var i=0; i<9; i++){
            this.state.squares[i]=i+1;//squares.
        }

    };
    /*
     position:absolute;
     top: 30%;
     left: 30%;
     */
  render() {
    const status = 'Next Player : X';
    return (
        <div>

        <button className="btn"  id="reset">reset</button>
            <div className="container1 title">
                Tic Tac Toe</div>

            <div className="container text-center">
            <Row className="row"  numb={this.state.squares[0]} numb1={this.state.squares[1]} numb2={this.state.squares[2]}/>
            <Row className="row"  numb={this.state.squares[3]} numb1={this.state.squares[4]} numb2={this.state.squares[5]}/>
            <Row className="row"  numb={this.state.squares[6]} numb1={this.state.squares[7]} numb2={this.state.squares[8]}/>
            </div>
            <div className="container1 status">{status} </div>
        </div>

            );
  }
}

export default App;
