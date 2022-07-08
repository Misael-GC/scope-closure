//variables

var a; //declarar
var b = 'b'; //declarar y asignar
b = 'reacignamos'; //reasignar 
var a = 'aa'; //redeclaración

//Global Scope
var fruit = 'Apple'; //global

const  bestFruit= ()=>{console.log(fruit)};

bestFruit();

//Cuidado
function countries(){
    country = 'COL' //No tiene var ni nada solo se agrego así
    console.log(country);
}

countries();
console.log(country);