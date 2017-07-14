import React from 'react';


const ItemDetail = ( { item } ) => (
  <section>
    <h3>{item.name}</h3>
    <ul>
      <li>Happiness: {item.happiness}</li>
      <li>Price: ${item.price}</li>
    </ul>
  </section>
) ;

export default ItemDetail;
