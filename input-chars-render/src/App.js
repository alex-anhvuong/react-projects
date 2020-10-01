import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    chars: [],
  }

  inputChangeHandler = (event) => {
    let text = event.target.value;
    let chars = text.split('');
    this.setState({ chars: chars });
  }

  removeCharHandler = (event, index) => {
    console.log('deleting');
    let chars = [...this.state.chars];
    chars.splice(index, 1);
    this.setState({ chars: chars });
  }

  render() {
    let chars = [...this.state.chars];

    chars = chars.map((c, index) => <CharComponent key={index} char={c} click={(e) => this.removeCharHandler(e, index)} />);

    return (
      <div className="App" >
        <p>Enter your password:</p>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.chars.join('')} />
        <p>Your password length: {this.state.chars.length}</p>
        <ValidationComponent textLen={this.state.chars.length} />
        {chars}
      </div>
    );
  }
}

function ValidationComponent(props) {
  return (
    <div>
      {
        props.textLen >= 9 ?
          <p>Text long enough</p> :
          <p>Text too short</p>
      }
    </div>
  );
}

function CharComponent(props) {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  }

  return (
    <div style={style} onClick={props.click}>
      <p>{props.char}</p>
    </div>
  );
}

export default App;
