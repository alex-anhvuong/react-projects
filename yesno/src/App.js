import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="question">
          <input type="text" />
          <button type="submit">Ask to the Gods of the Internet!</button>
        </div>
        {this.state.answer && (
          <div className="answer">
            <h1>{this.state.answer.answer}</h1>
            <img src={this.state.answer.image} />
          </div>
        )}
      </div>
    );
  }
}

export default App;