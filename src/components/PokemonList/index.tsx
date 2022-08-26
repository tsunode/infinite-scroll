import { useEffect, useState } from 'react';
import PokemonCard from './Card';

import { Container } from './styles';
import InfineteScroll from '../InfiniteScroll';

import type { IPokemon } from '../../services/pokemonApi/types';
import { getPokemons } from '../../services/pokemonApi/getPokemons';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemons(page).then((data) => {
      setPokemons([...pokemons, ...data.results]);
    });
  }, [page]);

  return (
    <>
      <Container>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            number={index + 1}
          />
        ))}
      </Container>
      <InfineteScroll
        callback={() => setPage((previousPage) => previousPage + 1)}
      />
    </>
  );
};

export default PokemonList;
