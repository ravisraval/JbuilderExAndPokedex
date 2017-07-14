import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const defaultState = {
  entities: {},
  currentPokeId: null
};
const pokemonReducer = (state = defaultState, action) => {

  Object.freeze(state);
  let newState;


  switch(action.type) {
    case "RECEIVE_ALL_POKEMON":
      newState = merge({}, state, { entities: action.pokemon } );
      return newState;
    case "RECEIVE_ONE_POKEMON":
      return merge({}, state, { currentPokeId: action.pokemon.poke.id } );
    default:
      return state;
  }
};


export default pokemonReducer;
