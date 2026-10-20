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