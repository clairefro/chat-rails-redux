# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DESTORY MESSAGE/USERS/CHANNELS
puts "destorying messages, users, channels..."
Message.destroy_all
User.destroy_all
Channel.destroy_all

puts "creating channels..."
channel = Channel.create({name:'general'})
Channel.create({name:'paris'})
Channel.create({name:'montreal'})
Channel.create({name:'react'})
Channel.create({name:'help'})

puts "creating sample users..."
blair = User.create({email: "blair@example.com", password:"aaaaaa"})
example = User.create({email: "example@example.com", password:"aaaaaa"})

puts "creating messages in general channel..."
Message.new({content:"hello world", user: blair, channel: channel})
Message.new({content:"I'm not a bot", user: example, channel: channel})

puts "done"
