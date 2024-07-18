// Estado de cuenta
const estadoDeCuenta = {
    saldoDisponible: 500
  };
  
  // Producto deseado
  const producto = {
    nombre: "Teclado Mecánico",
    precio: 300
  };
  
  const saldoSuficiente = estadoDeCuenta.saldoDisponible >= producto.precio;
    
  console.log("Saldo suficiente", saldoSuficiente);