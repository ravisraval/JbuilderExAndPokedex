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
