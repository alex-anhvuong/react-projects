import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { name: 'Alex', codeName: 'small' },
      { name: 'Rita', codeName: 'fefe' }
    ]
  }

  changeNameHandler = (event) => {
    let newUsers = this.state.users;
    newUsers[0] = { name: event.target.value, codeName: 'small' };
    this.setState({ users: newUsers });
    console.log(newUsers);
  }

  render() {
    return (
      <div className="App">
        <h1>Exercise 1: Get user input and display output</h1>
        <p>Manipulate the first user name:</p>
        <UserInput changed={this.changeNameHandler} userName={this.state.users[0].name} />
        <UserOutput userName={this.state.users[0].name} codeName={this.state.users[0].codeName} />
        <UserOutput userName={this.state.users[1].name} codeName={this.state.users[1].codeName} />
      </div>
    );
  }
}

export default App;
