import React, { Component } from 'react';
import './App.css';
import Row from './row'


class App extends Component {

    constructor()
    {
        super();
        this.state = {
          squares : Array(9).fill(null),
            s:Array(9).fill(null),
          currentSymbol : 'X',
            previousSymbol : '0',
        };
        for(var i=0; i<9; i++){
            this.state.s[i]=i+1;
            this.state.squares[i]=i+1;//squares.
        }
    };

     handleClick(i){

         if(i=='X' || i=='O'){
                return;
            }
            else{
                 const squares = this.state.squares.slice();
             this.state.previousSymbol=this.state.currentSymbol;
                 squares[i-1] = this.state.currentSymbol;
                 this.setState({squares: squares});
                 this.toggleCurrentSymbol();
            }

        };


    calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
     toggleCurrentSymbol(){
         if(this.state.currentSymbol == 'X')
             this.setState({currentSymbol : 'O'});
         else
             this.setState({currentSymbol : 'X'});
     };
    restart(){

        this.reset();

    }
    render() {
    var status = 'Next Player : '+ 'X';
        const winner = this.calculateWinner(this.state.squares);

        if (winner) {
            status = 'Winner: ' + this.state.previousSymbol;



        } else {
            status = 'Next player: ' + this.state.currentSymbol;
        }
    return (


        <div>

        <button className="btn"  id="reset" onClick={()=> this.setState({squares: this.state.s})}>reset</button>
            <div className="container1 title">
                   Tic Tac Toe</div>

            <div className="container text-center">
            <Row className="row"  numb={this.state.squares[0]} numb1={this.state.squares[1]} numb2={this.state.squares[2]} appClick={(i) =>this.handleClick(i)}/>
            <Row className="row"  numb={this.state.squares[3]} numb1={this.state.squares[4]} numb2={this.state.squares[5]} appClick={(i) => this.handleClick(i)}/>
            <Row className="row"  numb={this.state.squares[6]} numb1={this.state.squares[7]} numb2={this.state.squares[8]} appClick={(i) => this.handleClick(i)}/>
            </div>
            <div className="container3 status">{status} </div>
        </div>

            );

  }

}

export default App;
