// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00","tito","zeio", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
let saldoTotal = 0;
 
 
console.log("Iniciando auditoría de transacciones...");
 
 
for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];
 
 
    // Bug 1: Controlar valores corruptos
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        continue;
        // Falta algo aquí para saltar a la siguiente vuelta...
    }
 
 
    // Bug 2: Detener operaciones sospechosas (Alerta de fraude si supera 5000)
    if (transaccion > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break;
        // Falta algo aquí para abortar el bucle inmediatamente...
    }



    // Bug 3: Coerción de tipos oculta
    
        
    if (isNaN(Number(transaccion))) {
        console.log(`texto encontrado: ${transaccion}`);
        continue;
        // Falta algo aquí para saltar a la siguiente vuelta...
    }
    transaccion = Number(transaccion);
    saldoTotal += transaccion; 
}
 
 
console.log("Saldo total auditado: " + saldoTotal);