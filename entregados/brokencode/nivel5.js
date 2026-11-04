//nivel 5

let numeros = [1, 2, 3, 4];
let suma = 0;
 
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
 
console.log("Suma total: " + suma);

//el fallo se encuentra en el bucle ya que tiene una longitud de 4 pero va del 0 al 3 es decir que se va a pasar asi que devolveria un undefined
//para solucionarlo le podemos quitar el = o meterle un -1 en numeros.lenght