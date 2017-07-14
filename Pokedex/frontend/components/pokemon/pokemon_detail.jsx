import React from 'react';
import ItemDetail from '../items/item_detail';
import Item from '../items/item';
import ItemDetailContainer from '../items/item_detail_container';
import { Route } from 'react-router-dom';

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
    let items;

    if (!poke) {
      return null;
    } else {
      items = this.props.pokemon.items.map(item => <Item item={item} key={item.name}/>);
    }

    return (
      <section className="detail">
        <img className="poke_img" src={poke.image_url}/>
        <h3>{poke.name}</h3>
        <ul>
          <li>Type: {poke.poke_type}</li>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Moves: {poke.moves.join(", ")}</li>
          <li>Items: {items}
          </li>
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </section>
    );
  }
}

export default PokemonDetail;
