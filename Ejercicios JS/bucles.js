
/* Ejercicio N°1 -------------------------------------*/

/*  let num = prompt("Ingrese un número para ver su tabla")

 for(let i = 1 ; i < 11 ; i++){
      console.log(`${i} x ${num} = ${i*num}`);
 }
 */

 /* Ejercicio N°2 -----------------------------------*/

/*  let numeros = ""
 let total = 0

 do{
     
      numeros = prompt( "Ingrese un numero (termina con cero)" )
      if(numeros !== ""){
           console.log(total = parseInt(total) + parseInt(numeros)) 
           if(total > 99){
                console.log("El juego llega hasta 99");
                break
           }
      }else{
           console.log("Fin") 
      }
 }while(numeros != "")

 console.log(total);
 console.log("Terminó"); */

/* Ejercicio N° 3 ----------------------------------- */
/* let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza = -1;

while (adivinanza !== numeroSecreto) {
  adivinanza = prompt("Adivine el número secreto entre 1 y 100:");
  
  if (adivinanza > numeroSecreto) {
    console.log("El número secreto es menor.");
    intentos++;
  } else if (adivinanza < numeroSecreto) {
    console.log("El número secreto es mayor.");
    intentos++;
  } else {
    intentos++;
    console.log(`¡Felicitaciones! Adivinó el número secreto en ${intentos} intentos.`);
  }
} */

/* Ejercicio N° 4 ---------------------------------------- */

/* let num = prompt("Ingrese un número")

 for(let i = 2 ; i < num ; i++){
      console.log(num%i);
      if(num%i == 0){
           console.log(`${num} % ${i} == ${num%i}`);
           console.log("No es primo");
           break
      }else{
           console.log(`${num} % ${i} == ${num%i}`);
      }
 }
 alert("Es número primo") */

/* Ejercicio N° 5 -------------------------------------- */

/* let numero = prompt("Ingrese un número:");
let divisores = [];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
  }
}

console.log(`Los divisores de ${numero} son: ${divisores}`); */

/* Ejercicio N° 6 ---------------------------------------- */

/*  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} */

/* Ejercicio N° 7 ----------------------------------------------- */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2);
} */



/* Ejercicio N° 8 ------------------------------------------------ */

/* let familia = [
     { nombre: "Juan", edad: 35, ciudad: "Buenos Aires", trabajo: "Abogado" },
     { nombre: "María", edad: 30, ciudad: "Córdoba", trabajo: "Médica" },
     { nombre: "Pedro", edad: 10, ciudad: "Rosario", trabajo: null },
     { nombre: "Ana", edad: 60, ciudad: "Mendoza", trabajo: "Jubilada" },
     { nombre: "Lucas", edad: 25, ciudad: "La Plata", trabajo: "Ingeniero" }
   ];
   
   for (let i = 0; i < familia.length; i++) {
     console.log(`Hola, mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años y vivo en ${familia[i].ciudad}. Actualmente trabajo como ${familia[i].trabajo}.`);
   } */

/* Ejercicio N° 9 ------------------------------------------- */

/*  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
} */


/* Ejercicio N° 10 --------------------------------------------------- */

/* let numeros = [];
let numero = 1;

while (numero !== 0) {
  numero = prompt("Ingrese un número (0 para finalizar):");
  if (numero !== 0) {
    numeros.push(numero);
  }
}

let sumaPares = 0;
let sumaImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    sumaPares += numeros[i];
  } else {
    sumaImpares += numeros[i];
  }
}

console.log(`La suma de los números pares es ${sumaPares}.`);
console.log(`La suma de los números impares es ${sumaImpares}.`); */

/* Ejercicio N° 11 ------------------------------------- */

/* let array = [5, 2, 9, 1, 8, 3, 7, 4, 6, 10];
let maximo = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maximo) {
    maximo = array[i];
  }
}

console.log(`El número más grande es ${maximo}.`); */


/* Ejercicio N° 12 ------------------------------------ */

/* let array = [5, 2, 9, 1, 8, 3, 7, 4, 6, 10];
let minimo = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < minimo) {
    minimo = array[i];
  }
}

console.log(`El número más pequeño es ${minimo}.`); */

/* Ejercicio N° 13 ---------------------------------------- */

/* let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");
let jugadas = ["piedra", "papel", "tijeras"];

while (true) {
  let jugada1 = prompt(`${jugador1}, ingrese su jugada (piedra, papel o tijeras):`);
  let jugada2 = prompt(`${jugador2}, ingrese su jugada (piedra, papel o tijeras):`);

  if (jugada1 === jugada2) {
    console.log("Empate, sigan jugando.");
    continue;
  }

  if (
    (jugada1 === "piedra" && jugada2 === "tijeras") ||
    (jugada1 === "papel" && jugada2 === "piedra") ||
    (jugada1 === "tijeras" && jugada2 === "papel")
  ) {
    console.log(`${jugador1} gana!`);
    break;
  } else {
    console.log(`${jugador2} gana!`);
    break;
  }
} */


/* Ejercicio N° 14 ------------------------------------- */
/* for (let i = 1; i <= 5; i++) {
     let linea = "";
     for (let j = 1; j <= i; j++) {
       linea += "*";
     }
     console.log(linea);
   } */
/* Ejercicio N° 15 ---------------------------------------------------- */
/* for (let i = 5; i >= 1; i--) {
     let linea = "";
     for (let j = 1; j <= i; j++) {
       linea += "*";
     }
     console.log(linea);
   }
 */

/* Ejercicio N° 16 ----------------------------------------------------- */

/* let numeros = [5, 2, 9, 1, 7, 4, 6, 8, 3, 0];
let numerosOrdenados = [];

for (let i = 0; i < numeros.length; i++) {
  let numeroMenor = Infinity;
  let indiceMenor;
  
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] < numeroMenor && !numerosOrdenados.includes(numeros[j])) {
      numeroMenor = numeros[j];
      indiceMenor = j;
    }
  }
  
  numerosOrdenados.push(numeroMenor);
}

console.log(numerosOrdenados); */