import { Image } from "primereact/image";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import PokemonService from "./services/pokemonService";

//functional component
const App = () => {
  const [param, setParam] = useState("1");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const service = new PokemonService();

  const handleConsultar = useCallback(() => {
    service
      .consultar(param)
      .then((response) => {
        setName(response.data.name);
        setImage(response.data.sprites.other.dream_world.front_default);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param, service]);

  useEffect(() => {
    handleConsultar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="pokemon-card">
        <input type="text" onChange={(e) => setParam(e.target.value)} />
        <button type="button" onClick={handleConsultar}>
          Consultar
        </button>
        <h1>{name}</h1>
        <Image src={image} width="250" />
      </div>
    </div>
  );
};

export default App;
