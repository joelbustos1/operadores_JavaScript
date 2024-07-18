// Definición de objetos persona
const personas = [
    {
      nombre: "Alice",
      edad: 30,
    },
    {
      nombre: "Bob",
      edad: 25,
    },
  ];
  
  const resultado = personas[0].edad > personas[1].edad;
  console.log(`${personas[0].nombre} es mayor a ${personas[1].nombre}?`, resultado);