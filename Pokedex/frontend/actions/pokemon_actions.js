import * as APIUtil from '../util/api_util';


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestOnePokemon = (id) => (dispatch) => {
return APIUtil.fetchThisPokemon(id)
  .then(poke => {
    dispatch(receiveOnePokemon(poke));
    return poke;
  });
};

export const createPokemon = pokemon => (dispatch) => {
return APIUtil.createPokemon(pokemon)
  .then(poke => {
    dispatch(receiveOnePokemon(poke));
    return poke;
  });
};
