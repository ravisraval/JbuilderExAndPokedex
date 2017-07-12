json.poke do
  json.extract! @pokemon, :id, :name, :attack, :defense
end
json.items do
  json.array! @pokemon.items, :id, :name, :pokemon_id,
              :price, :happiness, :image_url
end
