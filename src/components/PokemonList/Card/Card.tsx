import { Container } from './styles';
import pokeball from '../../../assets/img/pokeball.png';
import type { IPokemonCardProps } from './types';

export const PokemonCard = ({ pokemon, number }: IPokemonCardProps) => (
  <Container>
    <img src={pokeball} alt='Pokemon Pokeball' />
    <span>
      {number} - {pokemon.name.toUpperCase()}
    </span>
  </Container>
);
