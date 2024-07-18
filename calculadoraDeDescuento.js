const precioInicial = 420;

// esto quieren decir que se le aplica el 30% de descuento 
const porcentajeDescuento = 30; 

// cuando la lógica conlleva varios pasos
// es mejor usar datos intermedios
// en este caso podés calcular cuanto significa el descuento
// en base al precio
const valorDelDescuento = (precioInicial * porcentajeDescuento) / 100;

// finalmente calcula cual es el precio con el descuento aplicado
const precioFinal = precioInicial - valorDelDescuento;
console.log(`Precio final con descuento aplicado, $${precioFinal}`);