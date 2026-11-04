//nivel 7

function procesarDatos(datos, callback) {
    callback(datos);
}
 
procesarDatos([1,2,3], function(d) {
    console.log("Datos recibidos:", d);
});

//el fallo de esta linea de codigo se encuentra en el callback ya que no se llama a la variable como deberia ser es decir pone el nombre mal
//corregimos el nombre y funciona