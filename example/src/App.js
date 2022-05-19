import logo from './logo.svg';
import './App.css';

import { getPokemonById } from 'sleekshop-js'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    getPokemonById(2).then((pokemon) => {
      console.log(pokemon.name);
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
