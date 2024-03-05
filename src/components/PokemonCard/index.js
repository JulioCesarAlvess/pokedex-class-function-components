/* eslint-disable react-hooks/exhaustive-deps */

import { Image } from "primereact/image";
import { useState } from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { useFetchListarEmpresas } from "../../hooks/usefetchPokemon";
import Error from "../Error";
import Loading from "../Loading";

const PokemonCard = () => {
  const [param, setParam] = useState("1");
  const { setFilter } = useFilterContext();
  const { data, isLoading, isError, refetch } = useFetchListarEmpresas();

  if (isLoading) return <Loading />;

  if (isError) return <Error refetch={refetch} />;

  return (
    <div className="pokemon-card">
      <input type="text" onChange={(e) => setParam(e.target.value)} />
      <button type="button" onClick={() => setFilter(param)}>
        Consultar
      </button>
      <h1>{data.name}</h1>
      <Image src={data.image} width="250" />
    </div>
  );
};

export default PokemonCard;
