import axios from "axios";
import { useQuery } from "react-query";
import { useFilterContext } from "../contexts/FilterContext";

export const useFetchListarEmpresas = () => {
  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  const { filter } = useFilterContext();

  return useQuery(["getPokemon", filter], () =>
    api.get(`/pokemon/${filter}`).then((result) => {
      return {
        image: result.data.sprites.other.dream_world.front_default,
        name: result.data.name,
      };
    })
  );
};
