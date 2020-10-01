import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Nene Tanaka", power: "GBB" },
      { id: "2", name: "Midoriya Izuku", power: "One For All" },
      { id: "3", name: "Bakugo", power: "Exploding Hand" },
    ],
    showPersons: true,
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;
    this.setState({ persons: updatedPersons });

  }

  toggleShowPersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    let newPersons = [...this.state.persons.slice()];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  }

  render() {
    const buttonStyle = {
      color: 'white',
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid darkblue',
      boxShadow: '0px 2px 5px darkblue',
      padding: '6px',
      margin: '12px',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                power={person.power}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <button style={buttonStyle} onClick={this.toggleShowPersonsHandler}>
          {this.state.showPersons ? 'Hide' : 'Show'} Persons
        </button>
        {persons}
      </div>
    );
  };
}

export default App;
