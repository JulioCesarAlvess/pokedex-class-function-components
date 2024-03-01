import ApiService from "./apiservice";

export default class PokemonService extends ApiService {
  constructor() {
    super("/pokemon/");
  }

  consultar(param) {
    return this.get(param);
  }
}
