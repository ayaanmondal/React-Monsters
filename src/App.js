import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();               // Super helps us with this by calling React.Component's constructor()

    this.state = {
      monster: []
    };
  }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));

   }
  render(){
    return(
      <div className="App">
        <CardList name="Yihua">
          <h1>Yihua</h1>
        </CardList>
      {this.state.monster.map(monster => (
        <h1 key={monster.id}> { monster.name} </h1> ))}
    </div>
    )
  }
}

export default App;
