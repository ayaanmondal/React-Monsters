import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'; 

class App extends Component{
  constructor(){
    super();               // Super helps us with this by calling React.Component's constructor()

    this.state = {
      monster: [],
      searchField: ''
    };
  }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));

   } 
  render(){
    const { monster, searchField} = this.state;
    const filterMonsters = monster.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Monsters Magic</h1>
        <SearchBox
          placeholder='search monsters'
          handlechange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filterMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
