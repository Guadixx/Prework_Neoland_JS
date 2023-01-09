//BUCLE FOR 
for(var i = 0; i <= 9; i++){
    console.log("Hola", i)
}
//i tiene el valor 0 
//Este bucle seguirá funcionando siempre y cuando i sea menor o igual que 9 según la condición i <= 9
// En cada una de las vueltas se sumará 1 gracias al operador ++ a la variable i 

var avengers = ["Iron man", "Hulk", "Black Widow", "Hawkeye"];

for(var i = 0; i < avengers.length; i++){
    var avenger = avengers[i];
    console.log("Hello " + avenger);
}

//ejercicio
var numbers = [1,5,7,9,12];
for(var i = 0; i < numbers.length; i++){
    var numbersNuevoValor = numbers[i];
    console.log("Total " + numbersNuevoValor);
}