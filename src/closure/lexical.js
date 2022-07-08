const myGlobal = 0; //variable global

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //function interna -> inicia el closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();

//resultado: 0 / 10 / 210