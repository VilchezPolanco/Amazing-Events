/*Ejercicio N° 1-------------------------------------------------------------------------------------------*/
let num1 = 5;
let num2 = 3;

if (num1 > num2) {
  console.log("El primer número es mayor que el segundo");
}
/*Ejercicio N° 2-------------------------------------------------------------------------------------------*/
let num3 = 5;
let num4 = 3;

if (num3 === num4) {
    console.log("Los números son iguales");
  } else {
    console.log("Los números son diferentes");
  }
/*Ejercicio N° 3-------------------------------------------------------------------------------------------*/
let num55 = 5;
let num6 = 5;

if (num55 > num6) {
  console.log("El primer número es mayor que el segundo");
} else if (num55< num6) {
  console.log("El segundo número es mayor que el primero");
} else {
  console.log("Los números son iguales");
}
/*Ejercicio N° 4-------------------------------------------------------------------------------------------*/
let num5 = 5;
let num8 = 3;
let num9 = 8;

if (num5 <= num8 && num5 <= num9) {
  console.log("El primer número es el más chico");
} else if (num8 <= num5 && num8 <= num9) {
  console.log("El segundo número es el más chico");
} else {
  console.log("El tercer número es el más chico");
}
/*Ejercicio N° 5-------------------------------------------------------------------------------------------*/
let persona1 = {
    nombre: "Juan",
    edad: 35,
    altura: 1.55
  };
  
  let persona2 = {
    nombre: "María",
    edad: 30,
    altura: 1.80
  };
  
  if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es la más alta");
  } else if (persona2.altura > persona1.altura) {
    console.log(persona2.nombre + " es la más alta");
  } else {
    console.log("Ambas personas tienen la misma altura");
  }
  
  if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es el mayor");
  } else if (persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " es el mayor");
  } else {
    console.log("Ambas personas tienen la misma edad");
  }
/*Ejercicio N° 6----------------------------------------------------------------------------------------------*/
 let nombre = prompt("Ingrese su NOMBRE")
 let edad = prompt("Ingrese su EDAD")
 let altura = prompt("Ingrese su ALTURA")
 let vision = prompt("Ingrese su VISION")

 if(edad < 18 && altura < 150 && vision < 8){
    console.log("es apto para conducir");
}else{
     console.log("no apto para conducir");
}
/*Ejercicio N° 5---------------------------------------------------------------------------------------------*/
let nombre1 = prompt("Ingrese su Nombre")
let pase = prompt("Posee pase? VIP/Normal")
let entrada = prompt("¿Posee entrada? s/n")

if(nombre1 == "Jhosselhin" || pase == "VIP"){
     console.log(`Bienvenido ${nombre1} tiene ingreso libre!`);
}else if(entrada == "s"){
     let usarEntrada = prompt("¿Quiere usar la entrada s/n?")
     if(usarEntrada == "s"){
          alert(`Bienvenido ${nombre1}`)
     }else{
          alert(`Hasta luego ${nombre1} te esperamos pronto`)
     }
}else{
     let comprarEntrada = prompt("¿Quiere comprar una entrada s/n?")
     if(comprarEntrada == "s"){
          let dineroDisponible = prompt("Ingrese monto a pagar (min. $1000)")
          if(dineroDisponible < 1000){
               alert("monto insuficiente, intente nuevamente")
          }else{
               alert(`Bienvenido ${nombre1}`)
          }
     }else{
          alert(`Hasta luego ${nombre1} te esperamos pronto`)
     }
}
/*Ejercicio N° 8----------------------------------------------------------------------------------------*/
let numeroIngresado = prompt("Adivine el número, Intento 1")
let numeroIncognita = 5
switch (numeroIngresado){
     case numeroIngresado:
          if(numeroIngresado < 5){
               alert("El numero incógnito es mayor");
          }else if(numeroIngresado > 5){
               alert("El numero incógnito es menor");
          }else{
               alert("ADIVINASTE");
          }
}
let numeroIngresado2 = prompt("Adivine el número, Intento 2")
switch (numeroIngresado2){
     case numeroIngresado2:
          if(numeroIngresado2 < 5){
               alert("El numero incógnito es mayor");
          }else if(numeroIngresado2 > 5){
               alert("El numero incógnito es menor");
          }else{
               alert("adivinaste");
          }
}
let numeroIngresado3 = prompt("Adivine el número, Intento 3")
switch (numeroIngresado3){
     case numeroIngresado3:
          if(numeroIngresado3 < 5){
               alert("El numero incógnito es mayor");
          }else if(numeroIngresado3 > 5){
               alert("El numero incógnito es menor");
          }else{
               alert("adivinaste");
          }
}
/*Ejercicio N° 9----------------------------------------------------------------------------------------------------------------*/
let edadIngresada = prompt("Ingrese su edad")

switch(edadIngresada){
case edadIngresada:
     if(edadIngresada > 0 && edadIngresada <= 12){
          alert("Eres un Infante");
     }
case edadIngresada:
     if(edadIngresada > 12 && edadIngresada <=18){
          alert("Eres un adolescente");
     }
case edadIngresada:
     if(edadIngresada > 18 && edadIngresada <= 45 ){
          alert("Eres un adulto");
     }
case edadIngresada:
     if(edadIngresada > 45 && edadIngresada < 100){
          alert("Eres un anciano");
     }     
case edadIngresada:
     if(edadIngresada >= 100){
          alert("¿Seguro tienes esa edad?");
     }  
}
/*Ejercicio N° 10------------------------------------------------------------------------------------------------------------*/
let jugador1 = prompt("Jugador 1, ingresa PIEDRA, PAPEL o TIJERAS:");
let jugador2 = prompt("Jugador 2, ingresa PIEDRA, PAPEL o TIJERAS:");

if (jugador1 === "PIEDRA" && jugador2 === "TIJERAS" || 
    jugador1 === "PAPEL" && jugador2 === "PIEDRA" || 
    jugador1 === "TIJERAS" && jugador2 === "PAPEL") {
  console.log("¡El Jugador 1 ha ganado!");
} else if (jugador2 === "PIEDRA" && jugador1 === "TIJERAS" || 
           jugador2 === "PAPEL" && jugador1 === "PIEDRA" || 
           jugador2 === "TIJERAS" && jugador1 === "PAPEL") {
  console.log("¡El Jugador 2 ha ganado!");
} else if (jugador1 === jugador2) {
  console.log("¡Empate!");
} else {
  console.log("Uno de los jugadores ha hecho trampa. Ingresa solo PIEDRA, PAPEL o TIJERAS.");
}
/*Ejercicio N° 11-----------------------------------------------------------------------------------------------------------*/
let color = prompt("Ingresa un color:");

switch (color) {
  case "blanco":
  case "negro":
    console.log("Falta de color.");
    break;
  case "verde":
    console.log("El color de la naturaleza.");
    break;
  case "azul":
    console.log("El color del agua.");
    break;
  case "amarillo":
    console.log("El color del sol.");
    break;
  case "rojo":
    console.log("El color del fuego.");
    break;
  case "marrón":
    console.log("El color de la tierra.");
    break;
  default:
    console.log("Excelente elección, no lo teníamos pensado.");
}
/*Ejercicio N° 12----------------------------------------------------------------------------------------------------------*/
let num11 = prompt("Ingresa el primer número:");
let num22 = prompt("Ingresa el segundo número:");
let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");

let resultado;

switch (operacion) {
  case "+":
    resultado = num11 + num22;
    console.log(`El resultado de la suma es ${resultado}.`);
    break;
  case "-":
    resultado = num11 - num22;
    console.log(`El resultado de la resta es ${resultado}.`);
    break;
  case "*":
    resultado = num11 * num22;
    console.log(`El resultado de la multiplicación es ${resultado}.`);
    break;
  case "/":
    if (num22 === 0) {
      console.log("ERROR: No se puede dividir entre cero.");
    } else {
      resultado = num11 / num22;
      console.log(`El resultado de la división es ${resultado}.`);
    }
    break;
  default:
    console.log("Operación no válida.");
}
/*Ejercicio N° 13------------------------------------------------------------------------------------------------------------*/
let datos = {}

datos.nombre = prompt("Nombre")
datos.apellido = prompt("Apellido")
datos.direccion = prompt("Domicilio")
datos.genero = prompt("Sexo")
datos.dni = prompt("DNI")

let respuesta = prompt(`Nombre: ${datos.nombre}\nApellido: ${datos.apellido}\nDirección: ${datos.direccion}\nGénero: ${datos.genero}\nDNI: ${datos.dni}\nlos datos son correctos? (s/n)`);

if(respuesta == "s"){
     console.table(datos);
     alert("Registro Exitoso!");
}else if(respuesta == "n"){
     alert("Vuelva a intentarlo en 1 mes");
}