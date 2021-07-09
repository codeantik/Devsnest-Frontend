import './App.css';
import { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state =  {
      counter: 0,
      counter2: 0
    }
    console.log(this.state)
  }


  render() {
    return (
      <div className='container'>
        <p> { this.state.counter } </p>
        <div className='btns'>
          <button onClick={() => { this.setState({ counter: this.state.counter + 1 })}}> Increment </button>
          <button onClick={() => { this.setState({ counter: this.state.counter - 1 })}}> Decrement </button>
          <button onClick={() => { this.setState({ counter: 0 })}}> Reset </button>
        </div>
      </div>
    );
  }
}

export default App;
