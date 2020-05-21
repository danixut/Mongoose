var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://xut:<password>@cluster0-na0li.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
  var libro = Libro({
  isbn: "1111111",
    autor: {
      primer: "Jose Emilio",
      paterno: "Pacheco"
    },
    titulo: "Las batallas en el desierto"
  });

  libro.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevosLibros() {

  var libros=[
    { isbn: "1111111",autor: {primer: "Jose Emilio", paterno: "Pacheco" }, tiulo: "Las batallas en el desierto"},
    { isbn: "2222222",autor: {primer: "Octavio", paterno: "Paz" },titulo: "El laberinto de la soledad"},
    { isbn: "3333333",autor: {primer: "Juan", paterno: "Rulfo" },titulo: "Pedro Paramo"},
    { isbn: "4444444",autor: {primer: "Carlos", paterno: "Fuentes" },titulo:"Aura"},
    { isbn: "5555555",autor: {primer: "Octavio", paterno: "Paz" },titulo: "Piedra de sol"},
    { isbn: "6666666",autor: {primer: "Jose Emilio", paterno: "Pacheco" }, tiulo: "El principio del placer"},
    { isbn: "7777777",autor: {primer: "Octavio", paterno: "Paz" },titulo: "La llama doble"},
    { isbn: "8888888",autor: {primer: "Juan", paterno: "Rulfo" },titulo: "El llano en llamas"},
    { isbn: "9999999",autor: {primer: "Carlos", paterno: "Fuentes" },titulo: "La region transparente"},
    { isbn: "1010101",autor: {primer: "Octavio", paterno: "Paz" },titulo: "El mono gramatico"},
  ];


  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

buscarByIsbn(isbn) {
  Libro.find({isbn:isbn},function(err,documentos){
     console.log(documentos);
   });
}

modificarTituloByIsbn(isbn, nuevoTitulo, autorNombre, autorApellido){
  Libro.findOneAndUpdate({isbn:isbn},
    {'titulo':nuevoTitulo},
    {'autor.nombre':autorNombre},
    {'autor.paterno':autorApellido},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });

}

function main() {
  nuevosLibros();
  buscarByIsbn("1111111");
  modificarTituloByIsbn("2222222","Las peras del olmo", "Octavio", "Paz")
}

main();    // ejecutamos main
