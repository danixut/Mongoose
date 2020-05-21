var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', true);
var AlumnoSchema =  Schema({
  isbn: String,
  autor: {
    primer: String,
    paterno: String
  },
  titulo: String
});
