json.extract! @guest, :age, :name, :favorite_color
json.gifts do
  json.array! @guest.gifts, :title, :description
end
