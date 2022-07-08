var firstName; //declaracion->undefinesd-> no tiene nada dentro
firstName = 'Misael-GC'; //Asignamos
console.log(firstName); // Misael-GC

//Reasinar
var lastName = 'David';
lastName = 'Ana';
console.log(lastName) //Ana


var secondName = "David"; //declarar y asignar
var secondName = 'Ana'; //re declarar y re asignar
console.log(secondName); //Ana

//Let > reasignar
let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit); //Kiwi

//redeclarar
let fruit = 'Banana'; //No se puede redeclarar
console.log(fruit); //error

//const
const animal = 'dog'; //declarar y asignar
animal = 'cat'; // reasignado
console.log(animal); //sintaxis error

//sintaxis correcta
const platzi = "comunidad";
console.log(platzi);

const vehicles = [];
vehicles.push('🚙'); //se supone que no podemos reasignar ni redeclarar
console.log(vehicles);
//resultado: [ '🚙' ]

vehicles.pop();
console.log(vehicles); //result: []