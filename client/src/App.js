import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      balls: 0,
      strikes: 0,
      hit: 0,
      message: '',
      foul: 0
    }
  }

  addCount = () => {
    const throwAttempt = Math.random() < 0.5;
    const hitAttempt = Math.random() < 0.5;
    // const foul = 0
    // console.log(attempt);

    // If throw attempt was successfull
    if (throwAttempt) {
      // If hit attempt was successfull
      const { hit, balls, strikes, foul }  = this.state;
      if (hitAttempt) {
  
        this.setState({
          balls: 0,
          strikes: 0,
          hit: hit + 1,
          message: 'Hit!',
          foul: 0
        })
      }
      // If hit attempt wasn't successfull

      else {
        const foulBall = Math.random() < 0.5;
        const {foul, hit, balls, strikes}  = this.state;
        
        if (foulBall) {
          if (foul > 2) {
            this.setState({
              balls: balls,
              strikes: strikes,
              hit: hit,
              message: 'Foul!',
              foul: foul
            }) 
          } else {
            this.setState({
              balls: balls,
              strikes: strikes + 1,
              hit: hit,
              message: 'Strike!',
              foul: foul + 1
             }) 
          }
        }
        if (strikes === 3) {
          this.setState({
            balls: 0,
            strikes: 0,
            hit: hit,
            message: 'Strike out!'
          })
        }
        else {
          this.setState({
            balls: balls,
            strikes: strikes + 1,
            hit: hit,
            message: 'Strike!'
          })
        }
      }
    }
    // If throw attempt was not successfull    
    else {
      const {hit, balls, strikes, foul}  = this.state;

      // If hit attempt was successfull

      if (hitAttempt) {
        this.setState({
          balls: 0,
          strikes: 0,
          hit: hit + 1,
          foul: 0,
          message: 'Hit!'
        })
      }
      else {
        if (balls === 3) {
          this.setState({
            balls: 0,
            strikes: 0,
            hit: hit,
            message: 'Walk!',
            foul: 0
          })
        }
        else {
          this.setState({
            balls: balls + 1,
            strikes: strikes,
            hit: hit,
            message: 'Ball!',
            foul: foul
          })
        }
      }
      
    }    
  }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} hit={this.state.hit} message={this.state.message} foul={this.state.foul}/>
        <Dashboard addCount={this.addCount }/>
      </div>
    );
  }
}

export default App;
