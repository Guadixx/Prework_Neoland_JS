//FUNCIONES
function greeting(){
console.log("Hello Neolander");
}

greeting();

//PARAMETROS Y ARGUMENTOS


//VALORES DE RETORNO

function student(name){
    return name + " is a student";
}
var quote = student("Jaime");
console.log(quote);

function fullNameAndAge(name,surname,age){
    return "My name is " + name + surname + " and I'm " + age + " Years old";
    }
    var frase = fullNameAndAge("Guadalupe", " Doudchitzky", 21);
    console.log(frase);

   function mulNumbers(numA, numB){
    var result = numA * numB
    console.log(result); 
   }
   mulNumbers(3,4);
   mulNumbers(5,5);