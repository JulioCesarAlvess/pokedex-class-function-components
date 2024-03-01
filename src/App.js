import { Image } from "primereact/image";
import React from "react";
import "./App.css";
import PokemonService from "./services/pokemonService.js";

class App extends React.Component {
  state = {
    name: "",
    image: "",
    param: "1",
  };

  constructor() {
    super();
    this.service = new PokemonService();
  }

  handleConsultar = () => {
    this.service
      .consultar(this.state.param)
      .then((response) => {
        console.log("teste");
        this.setState({ name: response.data.name });
        this.setState({
          image: response.data.sprites.other.dream_world.front_default,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.handleConsultar();
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => this.setState({ param: e.target.value })}
        ></input>
        <button type="button" onClick={this.handleConsultar}>
          Confirmar
        </button>
        <h1>{this.state.name}</h1>
        <Image src={this.state.image} alt="Image" width="250" />
      </div>
    );
  }
}

export default App;
