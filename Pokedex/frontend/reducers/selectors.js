import { values } from 'lodash';

export const selectAllPokemon = state => {
  return values(state.pokemon.entities);
};

export const selectOnePokemon = state => {
  return values(state.pokemon.entities);
};

export const selectPokemonItem = ({ pokemon }, itemId) => {
  const foundItem = pokemon.entities[pokemon.currentPokeId].items.find(item => item.id === itemId);
  return foundItem || {};
};
