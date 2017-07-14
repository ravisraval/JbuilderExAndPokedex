import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokes = this.props.pokemon;
    const pokesList = pokes.map(poke => <PokemonIndexItem
      key={poke.id}
      id={poke.id}
      pokemon={poke} />
      );

    return(
      <section className="pokedex">
        <ul>
          <Route path="/pokemon/:pokemonId"
            component={PokemonDetailContainer} />
        {pokesList}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
