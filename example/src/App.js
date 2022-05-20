import logo from "./logo.svg";
import "./App.css";

import { getPokemonById, createClient } from "sleekshop-js";
import { useEffect } from "react";

function App() {
  const client = createClient(
    "https://maxundmurat.sleekshop.net/",
    "maxundmurat_HcDbZqlx83ZKoyjyU7WT",
    "AJCEU136IYanex2BZRuy"
  );

  useEffect(() => {
    client.category.test2(2).then((test) => {
      console.log(test);
    });
    client.categories.getPokemonById(100).then((pokemon) => {
      console.log(pokemon.name);
    });
  }, [client]);
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
