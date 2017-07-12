import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokes = this.props.pokemon;
    const pokesList = pokes.map(poke => <li key={poke.id}>
      {poke.name}
      <img src={poke.image_url} />
    </li>);
    return(
      <ul>
        {pokesList}
      </ul>
    );
  }


}

export default PokemonIndex;
