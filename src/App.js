import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    });
  }, [url]);

  return (
    <div className="App">
      <header>List of pokemons</header>
      <div className="list">
        {pokemon.map((p) => {
          return <p className="pokemon">{p.name}</p>;
        })}
      </div>
      <div className="buttons">
        {previous && (
          <button className="prev" onClick={() => setUrl(previous)}>
            Previous
          </button>
        )}
        {next && (
          <button className="next" onClick={() => setUrl(next)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
