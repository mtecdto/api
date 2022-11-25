const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  data_de_alteracao: Date,
  data_de_criacao: Date,
  IP: Number,
})

module.exports = Person
