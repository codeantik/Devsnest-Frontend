import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-pic">
          <img src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png" alt="pic"></img>
        </div>
        <div className="card-text">
          <h1>React Card</h1>
          <div className="card-description">
            <p>This is a meme card</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
