import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../api/pokeApi";
import { useEffect, useState } from "react";

export default function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState({});

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(url),
  });

  useEffect(() => {
    if (!isLoading) {
      setPokemon(data.data);
    }
  }, [isLoading, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="h-52 border rounded-xl bg-slate-800">
      <div className="flex justify-end px-2 pt-2">
        <h4 className="font-medium text-white">{`#${String(pokemon.id).padStart(
          3,
          "0"
        )}`}</h4>
      </div>
      <div>
        <img
          alt={`${pokemon.name} image`}
          src={pokemon?.sprites?.other?.home?.front_default}
        />
      </div>
      <div className="bg-green-500 rounded-b-md px-2 py-1 flex justify-center">
        <h4 className="font-medium text-white">{pokemon.name}</h4>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
