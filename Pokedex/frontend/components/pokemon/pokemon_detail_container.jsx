import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { selectOnePokemon } from '../../reducers/selectors';


const mapStateToProps = ({ pokemon }) => ({
  pokemon: pokemon.entities[pokemon.currentPokeId]
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: id => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(PokemonDetail);
