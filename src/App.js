import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './row'


class App extends Component {

  render()
  {
      var a=[];

      var i=0;
      for(;i<9; i++)
      {
          a[i]=i+1;
      }
      function ready(){



      }
      function handlechange() {
          a[0]="x";

      }
    return (
        <div>

        <button class="btn" onclick={ready} id="reset">reset</button>
            <div className="container title">
                Tic Tac Toe</div>
            <div className="container description">Two Human Players - X Moves First</div>
            <div className="container text-center">
            <Row className="row" onchange={handlechange} numb={a[0]} numb1={a[1]} numb2={a[2]}/>
            <Row className="row" onchange={handlechange} numb={a[3]} numb1={a[4]} numb2={a[5]}/>
            <Row className="row" onchange={handlechange} numb={a[6]} numb1={a[7]} numb2={a[8]}/>
            </div>
        </div>

            );
  }
}

export default App;
