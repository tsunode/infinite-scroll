import { Container } from './styles';
import pokeball from '../../../assets/img/pokeball.png';
import type { IPokemonCardProps } from './types';

const PokemonCard = ({ pokemon, number }: IPokemonCardProps) => (
  <Container>
    <img src={pokeball} alt='' />
    <span>
      {number} - {pokemon.name.toUpperCase()}
    </span>
  </Container>
);

export default PokemonCard;
