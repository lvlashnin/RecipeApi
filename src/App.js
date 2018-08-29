import React, { Component } from 'react';
import './App.css';
import GetRecipe from './components/GetRecipe'
import ImdbData from './components/ImdbData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Поиск рецептов</h1>
        </header>
        <GetRecipe/>
        <ImdbData/>
      </div>
    );
  }
}

export default App;
