
function greeting(){
    let userName = 'Oscar'; //asignamos y declaramos una variable

    function displayUserName(){
        return `Hello ${userName}`; //accedemos al contenido de la variable
    }
    return displayUserName();
}

//Acceder al contexto
// Vamos a ver como ejecutar la closure y sacar ventaja

const g = greeting();
console.log(g);
console.log(g());
