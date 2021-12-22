# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
steven = Author.create(name: "Steven King") # id 1
tolkien = Author.create(name: "J.R.R. Tolkien") # id 2
rowling = Author.create(name: "J.K. Rowling") # id 3


puts "Done Seeding"