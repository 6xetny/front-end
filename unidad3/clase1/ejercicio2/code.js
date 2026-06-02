const usuario = "Usuario1";
let celular = "+56912345678";
celular = "+56987654321";

console.log(usuario);
console.log(celular);
console.log(usuario.length) //Cantidad de caracteres
console.log(usuario.toLowerCase()); //Convierte texto a minusculas
console.log(usuario.toUpperCase()); //Convierte texto a mayusculas
console.log(usuario.slice(0,3)); //Saca una parte del string (inicio, fin)
console.log(usuario.includes("Usuario1")); //Verifica si un elemento existe dentro de otro y devuelve false o true 
console.log(usuario.includes("User"));

let int = 10; //Variable "int" con valor entero
let float = 3.14; //Variable "Float" con valor flotante/real
let negative = -5; //Variable "negative" con valor entero negativo

console.log("--------Number/toFixed--------")
let result = 0.1+0.2;
console.log(result); //Limitacion 0.1+0.2 = 0.30000000000000004
console.log(result==0.3); //las == devuelven true or false
result = Number(result.toFixed(1));
console.log(result);
//Number: es para representar y manipular valores numericos
//si el valor es string: "31" devuelve 31 en entero
//toFixed: formatea un numero utilizando una cantidad fija de decimales y devuelve el resultado como una cade de texto (string)

console.log(result==0.3); //segunda comprobacion

//Se puede forzar cualquier valor a boolean usando la funcion Boolean() o doble exclamacion !!
console.log("--------Boolean--------")
console.log(Boolean(100));
console.log(!!"Hola");

let esValido = true
let noEsValido = false

console.log("esValido:", esValido);
console.log("noEsValido:", noEsValido);

let mayorDeEdad = 18 > 15;//devuelve true
let esIgual ="hola"==="adios";//devuelve false

console.log("mayorDeEdad:", mayorDeEdad);
console.log("esIgual:", esIgual);

console.log("Boolean(100):",Boolean(100));//devuelve true
console.log("!!'Hola':",!!"Hola");//devuelve true
console.log("Boolean(0):",Boolean(0));//devuelve false

