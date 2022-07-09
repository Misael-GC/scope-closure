// var nameOfDog; //undefined
// console.log(nameOfDog); //undefined
// var nameOfDog = 'Elmo';
var nombre; //var nombre se elevo -> undefined
nameOfDog();//aunque no está asignado aún, la función es elvada Y se acomoda arriba del su llamado

function nameOfDog(){
    console.log(`El mejor perrito es ${nombre}`);
}

var nombre = 'elmo';

//El mejor perrito es undefined