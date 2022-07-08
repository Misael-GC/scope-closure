// function moneyBox(coins){
//     let saveCoins = 0; //iniciamos en 0
//     saveCoins += coins; //suma y operación principal de la alcancia
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


function Alcancia(){
    let acumulado = 0;
    function contadorMonedas(monedas){
        acumulado += monedas;
        console.log(`Alcancia: $${acumulado}`)
    }
    return contadorMonedas;
}

const miAlcancia = Alcancia();

miAlcancia(5);
miAlcancia(25);
miAlcancia(5);


let moneyBox = () => {
    let saveCoins = 0;
    let countCoins = (coins)=>{
        saveCoins+=coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins; 
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(7);
moneyBoxAna(7);
moneyBoxAna(7);
