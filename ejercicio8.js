// IF ELSE ELIF 
var name = "Peter";
if(name === "Peter"){
    console.log("Mi nombre es Peter");

}

if(name === "John"){
    console.log("Mi nombre es John");
}

var age = 17;
if (age >= 18){
    console.log("Puedes Conducir");
} else {
    console.log("Todavia te falta para poder conducir");
}

var nota = 5;
if(nota>= 0 && nota < 5){
    console.log("Suspenso");
} else if (nota >= 5 && nota <= 9){ //indicar la variable dos veces 
    console.log("Estas aprobado");
} else if (nota === 10){
    console.log("Matricula de honor");
} else{
    console.log("La nota no es valida");
}

//ejercicio
var num = 10;
if(num > 15){
    console.log("Mayor que 15");
}else if (num < 10){
    console.log("Menor que 10");
}else if( num <= 10){
    console.log("Entre 0 y 10");
}