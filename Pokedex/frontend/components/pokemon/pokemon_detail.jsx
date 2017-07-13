import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const poke = this.props.pokemon;
    console.log(this.props);

    if (!poke) {
      return null;
    }

    return (
      <ul>
        <li><img src={poke.image_url}/></li>
        <li>{poke.name}</li>
        <li>Type: {poke.poke_type}</li>
        <li>Attack: {poke.attack}</li>
        <li>Defense: {poke.defense}</li>
        <li>Moves: {poke.moves}</li>
      </ul>
    );
  }
}

export default PokemonDetail;
