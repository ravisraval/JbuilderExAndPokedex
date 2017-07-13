import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const rootEL = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, rootEL);
});
