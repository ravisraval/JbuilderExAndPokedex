json.array! @guests do |guest|
  next if guest.age < 40 || guest.age > 50
  json.extract! guest, :age, :name, :favorite_color
end
