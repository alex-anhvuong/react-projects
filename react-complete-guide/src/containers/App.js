import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/authContext';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('[App.js] constructor');
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentDidMount() {
  //   console.log('[App.js] componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] shouldComponentUpdate');
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('[App.js] componentDidUpdate');
  // }

  state = {
    persons: [
      { id: "1", name: "Nene Tanaka", power: "GBB" },
      { id: "2", name: "Midoriya Izuku", power: "One For All" },
      { id: "3", name: "Bakugo", power: "Exploding Hand" },
    ],
    showCockpit: true,
    showPersons: true,
    changeCounter: 0,
    authenticated: false,
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: updatedPersons,
        changeCounter: prevState.changeCounter + 1
      };
    });

  }

  toggleShowPersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  deletePersonHandler = (personIndex) => {
    let newPersons = [...this.state.persons.slice()];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  }

  render() {
    console.log('[App.js] rendering...');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }); }}>
          {this.state.showCockpit ? 'Remove' : 'Show'} Cockpit
        </button>
        <AuthContext.Provider value={
          {
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }
        }>
          {this.state.showCockpit ? <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.toggleShowPersonsHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  };
}

export default withClass(App, "App");
