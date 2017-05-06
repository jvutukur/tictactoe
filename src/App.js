import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './row'


class App extends Component {

  render() {
    return (
        <div>

        <button class="btn" id="reset">reset</button>
            <div className="container title">
                Tic Tac Toe</div>
            <div className="container description">Two Human Players - X Moves First</div>
            <div className="container text-center">
            <Row className="row" numb="1" numb1="2" numb2="3"/>
            <Row className="row" numb="4" numb1="5" numb2="6"/>
            <Row className="row" numb="7" numb1="8" numb2="9"/>
            </div>
        </div>

            );
  }
}

export default App;
