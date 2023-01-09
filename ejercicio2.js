var nombre = "Guadalupe"
var apellido = "Doudchitzky"
var edad = 21
var profesion = "Web developer"
var ciudad = "Madrid"
console.log(nombre, apellido,edad,profesion,ciudad);

//Listas 
var lostNumbers = [4, 8, 15, 16, 42];
var movies = ["Robocop", "Terminator", "The matrix"];
var mix = ["Palabra", 2, true, null];

//Posición y longitud
var strangers = ["Eleven", "Mike", "Dustin", "Max", "Lucas"];
var firstChart = strangers[0];
console.log(firstChart);
var secondChar = strangers[1];
console.log(secondChar);
console.log(strangers.length);

//atacar arrays 
var guardiansOfTheGalaxy = ["Starlord", "Rocket", "Groot", "Drax"];

guardiansOfTheGalaxy[0] = "Thor";
console.log(guardiansOfTheGalaxy);
//En vez de añadirlo lo está suplantando.
guardiansOfTheGalaxy.push("Gamora","Mantis");
console.log(guardiansOfTheGalaxy);
//push para añadir
var jediList = ["Luke", "Rey", "Qui-gon", "Obi-wan"];
jediList.pop();
console.log(jediList); //Retorno-> ["Luke","Rey","Qui-Gon"]
