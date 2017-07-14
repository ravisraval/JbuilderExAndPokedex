import React from 'react';
import { Link } from 'react-router-dom';

const Item = ( { item } ) => (
  <section>
    <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
      <img src={item.image_url}/>
    </Link>
  </section>
);


export default Item;
