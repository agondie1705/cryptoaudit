//aqui probare los ejercicios que no haya que entregar
//2-7
//nivel 1
/* 
let a = 5;
let b = 10;
let result = a + b;
console.log("Resultado es: " + reslt);
*/
//en este ejercicio no funciona por una falta de ortografia "u" de result no esta en el cosole log
//lo solucionaria poniendo la letra faltante lo he detectado gracias al watch o a simple vista

//nivel 2
/*
let edad = 16;
if (edad => 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
*/
//en este ejercicio el fallo se encuentra en el signo del if "=>" lo encontre haciendo pruebas
//para que funcione hay que hacer ">=" para que identifique realmente que es si mayor o menor de edad

//nivel 3
/*
function multiplicar(a, b) {
    let ofthejedi= a * b;
    // return ofthejedi;
}
 
let total = multiplicar(3, 4);
console.log("Total: " + total);
*/
//aqui en este codigo el fallo se encuentra en el ofthejedi ya que hay un return comentado
//lo solucionamos quitando las "//" y lo he visto por que ponia que no estaba siendo leido

//nivel 4
function saludar(nombre) {
    console.log("Hola " + name);
}
 
saludar("Ana");
//