import React from 'react';
import { Link } from 'react-router-dom';


class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const poke = this.props.pokemon;
    const pokeId = this.props.id;
    return (
      <li key={pokeId}>
        <Link to={`/pokemon/${pokeId}`}>
          {poke.name}
          <img src={poke.image_url} />
        </Link>
      </li>
    );
  }

}

export default PokemonIndexItem;
