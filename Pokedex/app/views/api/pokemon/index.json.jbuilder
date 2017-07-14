@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :poke_type, :attack, :defense, :moves
    json.items do
      json.array! poke.items
    end
    json.image_url asset_path(poke.image_url)
  end
end
