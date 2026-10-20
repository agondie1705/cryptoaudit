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
/*
function saludar(nombre) {
    console.log("Hola " + nombre);
}
 
saludar("Ana");
*/
//aqui en este codigo el fallo se encuentra en que esta llamando a name en vez de a nombre 
//lo he visto en el codigo directamente lo corregire

//nivel 5
/*
let numeros = [1, 2, 3, 4];
let suma = 0;
 
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);
*/
//el fallo se encuentra en el bucle ya que tiene una longitud de 4 pero va del 0 al 3 es decir que se va a pasar asi que devolveria un undefined
//para solucionarlo le podemos quitar el = o meterle un -1 en numeros.lenght

//nivel 6
/*
function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(esPar(3));
console.log(esPar(4));
 */
//este codigo tiene el erro en el if el 2 no esta haciendo nada falta un = si le ponemos el == funciona
//ya que compara 

//nivel 7
/*
function procesarDatos(datos, callback) {
    callback(dat);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});
*/
//el fallo de esta linea de codigo se encuentra en el callback ya que no se llama a la variable como deberia ser es decir pone el nombre mal
//corregimos el nombre y funciona

//nivel 8
/*
<!DOCTYPE html>
<html lang="es">
<body>
  <button id="miBoton">Click me</button>
 
  <script>
    const btn = document.getElementById("miBoton");
    btn.addEventListener("click", function() {
      let msg = "Hola mundo";
      console.log(msj);
    });
  </script>
</body>
</html>
*/
//el fallo encontrado en el codigo es que en vez de llamar a msg llama a msj aparte del problema de que es un html en un archivo .js si le pongemos
//que sea un .html funciona

//nivel 9

function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}
 
console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 60));
//el error que esta en este codigo es de las varibale deberia de ponerse correctamete el descuento en este formato "0.x" no asi 60
//se puede solucionar haciendo un if que compruebe el descuento y y dependiendo transformara el descuento(si es esto 60)
//y si no eso lo pondra directamente