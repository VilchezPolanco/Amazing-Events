// N°1 
const miNombre = "Jhosselhin";

// N°2 
let miApellido = "Vilchez";

// N°3 
const miEdad = 30;

// N°4 
let miMascota = "Zuko";

// N°5 
const edadMascota = 1;

// N°6 
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

// N°7
let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto);

// N°8 
var textoPresentacion = "Hola me llamo " + nombreCompleto + " tengo "+miEdad+ " años, " + "mi mascota se llama "+ miMascota+ " y tiene "+ edadMascota;
console.log(textoPresentacion);

// N°9 
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

// N°10 
let textoPresentacionn = "Hola me llamo " + nombreCompleto + " tengo "+miEdad+ " años, " + "mi mascota se llama "+ miMascota+ " y tiene "+ edadMascota+ " sumando nuestras edades tenemos " + sumaEdades+ " restandolas tenemos " + restaEdades +" multiplicandolas tenemos " + productoEdades+  " dividiendolas tenemos " + divisionEdades;
console.log(textoPresentacionn);