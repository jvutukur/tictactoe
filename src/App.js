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
          currentSymbol : 'X',
        };
        for(var i=0; i<9; i++){
            this.state.squares[i]=i+1;//squares.
        }
    };

     handleClick(i){
         console.log('in test' + i);
         if(i=='X' || i=='O'){
                return;
            }
            else{
                this.state.squares[i-1] = this.state.currentSymbol;
                /*
                 const squares = this.state.squares.slice();
                 squares[i] = 'X';
                 this.setState({squares: squares});
                 */
                this.toggleCurrentSymbol();
            }
        };

     toggleCurrentSymbol(){
         if(this.state.currentSymbol == 'X')
             this.state.currentSymbol = 'O';
         else
            this.state.currentSymbol = 'X';
     };

    render() {
    const status = 'Next Player : '+ this.state.currentSymbol;
    return (
        <div>

        <button className="btn"  id="reset">reset</button>
            <div className="container1 title">
                Tic Tac Toe</div>

            <div className="container text-center">
            <Row className="row"  numb={this.state.squares[0]} numb1={this.state.squares[1]} numb2={this.state.squares[2]} appClick={(i) =>this.handleClick(i)}/>
            <Row className="row"  numb={this.state.squares[3]} numb1={this.state.squares[4]} numb2={this.state.squares[5]} appClick={(i) => this.handleClick(i)}/>
            <Row className="row"  numb={this.state.squares[6]} numb1={this.state.squares[7]} numb2={this.state.squares[8]} appClick={(i) => this.handleClick(i)}/>
            </div>
            <div className="container1 status">{status} </div>
        </div>

            );
  }

}

export default App;
