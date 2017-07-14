export const fetchAllPokemon = () => {
  return $.ajax ({
    type: "GET",
    url: 'api/pokemon'
  });
};

export const fetchThisPokemon = (id) => {
  return $.ajax ({
    type: "GET",
    url: `api/pokemon/${id}`
  });
};

export const createPokemon = (pokemon) => {
  return $.ajax ({
    type: "POST",
    url: `api/pokemon`,
    data : { pokemon }
  });
};
