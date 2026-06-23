const usuario = "Usuario1";
let celular = "+56912345678";
celular = "+56987654321";

console.log(usuario);
console.log(celular);
console.log(usuario.length); //Cantidad de caracteres
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
console.log("--------Boolean--------");
console.log(Boolean(100)); //True
console.log(!!"Hola"); //True
console.log(!!0); //False

let mayoredad = 18 > 15; //Devuelve true
let esIgual = "hola" == "adios"; //Devuelve false
console.log("Mayor de edad: ",mayoredad);
console.log("Es igual: ",esIgual);


console.log("--------typeof--------");
console.log(typeof("Hola"));
console.log(typeof(1));
console.log(typeof(true));
console.log(typeof(a));
console.log(typeof(function(){}));
console.log(typeof({name: "ana"}));

console.log("--------Operadores--------")

//+: suma / ++
//-: resta / --
//*: multiplicacion
// /: division
// **: exponenciado / **
// %: Modulo(Resto)

let num1 = 12;
let num2 = 4;

console.log("+",num1+num2);
console.log("-",num1-num2);
console.log("*",num1*num2);
console.log("/",num1/num2);
console.log("**",num1**num2);
console.log("%",num1%num2);

num1++;
num2--;

console.log("var++",num1); //13
console.log("var--",num2); //3

//Ejemplo: 10/3=1 porque se divide 10 entre 3 y sobra 1

console.log(10%3);

console.log("--------Operadores logicos--------")

console.log(5 === "5"); //Igualdad estricta 3s === : False
console.log(5 !== "5"); //Desigualdad estricta: True

console.log(5 == "5") //Igualdad debil: true
console.log(5 != "5"); //Desigualdad debil: false

console.log("a" < "b"); //Comparacion de strings-Orden alfabetico: True

/*
Operadores logicos:

AND = &&
OR = ||
NOT = (!var)

*/

console.log("--------Concatenar--------")
let _name = "Jose";
let _last = "Antio";
let _age = 20;

console.log(_name + " " + _last);
console.log("La edad de "+_name+" es "+_age);

console.log("--------prompt--------")
/*
Se considera obsoleto, da error en algunos navegadores

//prompt(): devuelve string

_name = prompt("Nombre:");
alert("Hola "+_name);

let _city = prompt("En que ciudad vives?");
alert("Ciudad ingresada: " + _city);

_age = prompt("Cuantos años tienes");
console.log(Number(_age)+1)

_name = prompt("Nombre:")
_age = prompt("Edad:")

console.log("Hola "+_name+", en 5 años mas tendras "+(Number(_age)+5)+" años");

*/

console.log("--------String--------")

console.log(String(3.14)); //Devuelve "3.14"
console.log(String(true)); //Devuelve "true"

//String(): Covierte a string
//Number(): Convierte a numero
//Boolean(): Convierte a booleano

console.log("--------Condicionales--------")

let _temp = 26;

if (_temp > 25)
{
    console.log("La temperatura es mayor a 25°");
}
else
{
    console.log("La temperatura no es mayor a 25°");
}

let _nota = 5.0;

if (_nota >= 6.0)
{
    console.log("Excelente");
}
else if (_nota >= 5.0)
{
    console.log("Muy bien");
}
else if (_nota >= 4.0)
{
    console.log("Aprobado");
}
else
{
    console.log("Reprobado");
}

//Ejercicio
/*
_name = prompt("Nombre:")
let _score = Number(prompt("Puntuacion:"))

if (_score >= 1000)
{
    console.log(_name+" ingreso al ranking de los mejores jugadores");
}
else
{
    console.log(_name+" no alcanzo el puntaje minimo para ingresar al ranking");
}
*/

//Ejercicio 2
/*
_name = prompt("Nombre:")
_age = Number(prompt("Edad:"))

if (_age < 6)
{
    console.log(_name + " viaja gratis")
}
else if (_age >= 6 && _age <= 17)
{
    console.log(_name + " paga pasaje escolar: $350")
}
else if (_age >= 18 && _age <= 64)
{
    console.log(_name + " paga pasaje adulto: $750")
}
else
{
    console.log(_name + " paga pasaje adulto mayor: $350")
}
*/

//Ejercicio 3

/*
_age = Number(prompt("Edad:"))
let _sueldoMensual = Number(prompt("Sueldo mensual:"))
let _deudas = Number(prompt("Deudas vigentes:"))

if (_age >= 18 && _age <= 70 && _sueldoMensual >= 550000 && _deudas < 3 )
{
    console.log("Felicitaciones, su prestamo fue aprovado")
}
else
{
    console.log("Lo sentimos, su prestamo fue rechazado")
}
*/

//Bucle for

/*
let _numtemp;
for (let _num = 0;_num<10;_num++)
{
    console.log("Actual: " + _num);
    _numtemp = _num;
    console.log("Siguiente: "+ ++_numtemp);

    if (_num == 5)
    {
        break;
    }
}

//While
let _num = 0;
while (_num < 10)
{
    console.log("While "+_num)
    _num++
}
*/

//Ejercicio
/*
let _num = Number(prompt("Numero:"))

for (let _mult = 1;_mult <= 10;_mult++)
{
    console.log(_num+"x"+_mult+" = "+_num*_mult)
}
*/

// ejercicio 2 
/*
let _num2 = (Number(prompt("ingrese numeros:")))

let contador = 0;
let suma = 0;
let promedio = 0;

while (true) {
    suma += _num2;
    if (_num2 === 0) {
       promedio = suma / contador; 
       break;
    }
    else {
        _num2 = (Number(prompt("ingrese numeros:")))
        contador++;
        
    
    }
}

console.log("Cantidad de numeros ingresados: " + contador);
console.log("Suma de los numeros ingresados: " + suma);
console.log("Promedio de los numeros ingresados: " + promedio.toFixed(2));
*/

//ejercicio 3 caja registradora
let _productos= Number(prompt("Ingrese la cantidad de productos:"));
let precioCaro = 0;
let precioBarato = 0;
let total = 0;

for (let i = 1; i <= _productos; i++) {
    let precio = Number(prompt("Ingrese el precio del producto " + i + ":"));
    total += precio;
    
    if (i === 1 || precio > precioCaro) {
        precioCaro = precio;
    }
    if (i === 1 || precio < precioBarato) {
        precioBarato = precio;
    }
}


console.log("Precio del producto más caro: $" + precioCaro);
console.log("Precio del producto más barato: $" + precioBarato);
console.log("Total a pagar: $" + total);