/* // Ejercicio: Acceso A Los Valores De Un Objeto
let objeto_demo={
    uno:1,
    dos:2,
    tres:3
}
let uno="tres"
//como deberia debolver el siguiente codigo?? objeto_demo['dos'] //deberia dar 2 ya que el valor de dos no cmabio
// y este codigo? objeto_demo[uno] //deberia dar 3 
//ahora como lo vizulaisamos
console.log(objeto_demo['dos']); // Imprime 2
console.log(objeto_demo[uno]); // Imprime 3
//Ejercicio 2
//Tenemos un Objeto capitales con dos Propiedades (Argentina y Uruguay) y luego una Variable que se llama lugar y contiene el Valor Uruguay:
let capitales={
    Argentina :'Buenos Aires',
    Uruguay:'Montevideo'
}
let lugar ='Uruguay'
//que deberia devolver cada unoa de estas sentencias
// capitales ['lugar'] //deberia debolver undefined  ya que las no hay una propiedad llamada lugar
// capitales.lugar //deberia debolver undefined  ya que las no hay una propiedad llamada lugar
// capitales [lugar] //deberia devolver Montevideo ya que lugar tine valor Uruguay
//capitales ['Argentina'] //deberia devolver Buenos Aires
//capitales.Argentina //deberia devolver Buenos Aires
//capitales [Argentina]//deberia devolver error ya no esta definida
//comprobamos:
console.log(capitales ['lugar']);
console.log(capitales.lugar);
console.log(capitales [lugar]);
console.log(capitales ['Argentina']);
console.log(capitales.Argentina);
console.log(capitales [Argentina]); */

//                    Registro
//Creá un objeto con las propiedades que debe contener cada nuevo usuario que se registra en una plataforma:
/*
//puede ser asi 
 let nuevousuario={
    usuario: "UnNuevoUsuario",
    edad:23,
    direccion:"calle de mentira",
    fechaDeNacimiento:"14/03/1999",
    contraseña:"unacontraseñamuysegura"
 } */
/* // o puede ser asi (ami me gusta mas esta forma para completar ya que simula  un formulario)
 let nuevoUsuario = {
    usuario: "",
    edad: null,
    direccion: "",
    fechaDeNacimiento: "",
    contraseña: ""
  };
  ´23
  nuevoUsuario.usuario = prompt("Ingrese su nombre de usuario:");
  nuevoUsuario.edad = parseInt(prompt("Ingrese su edad:"));
  nuevoUsuario.direccion = prompt("Ingrese su dirección:");
  nuevoUsuario.fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm/yyyy):");
  nuevoUsuario.contraseña = prompt("Ingrese su contraseña:");
  
  console.log(nuevoUsuario); */

//                              Variable miAuto
// Creá una Variable llamada miAuto y asignale un Objeto vacío.
// Asignale a miAuto una Propiedad marca, que a su vez contenga un String.
// Agregá una Propiedad año que contenga un número entero.
// Agregá una Propiedad nuevo que contenga un booleano.
/* let miAuto={
 };
miAuto.marca = "Toyota";
miAuto.año = 2015;
miAuto.nuevo = true;
// Creá una Variable llamada propertyKey y asignale el String "modelo"
let propertyKey="modelo";
// Agregá la Propiedad modelo al Objeto miAuto.
miAuto[propertyKey] ="Corolla"
// Creá una Variable llamada anotherPropertyKey y dale el Valor "precio".
let anotherPropertyKey = "precio";
// Cuantificá el Valor de tu auto.
miAuto[anotherPropertyKey] = 25000;
// Asigná la String "color" a una Variable nueva llamada nextProperty.
let nextProperty = "color";
// Usá la variable nextProperty para añadir el color a tu auto.
miAuto[nextProperty] = "Rojo";
// Usá el loop for...in para iterar sobre el Objeto miAuto y que muestre en la consola el key y el value de cada Propiedad.
for (let key in miAuto) {
    console.log(`Key: ${key}, Value: ${miAuto[key]}`);
  }
// Para Pensar...
// ¿Qué devuelve miAuto[propertyKey]? devuleve la marca toyota
// ¿Qué devuelve miAuto["modelo"]? devuleve modelo corolla
// ¿Qué devuelve miAuto[nextProperty] ?  rojo
// ¿Qué devuelve miAuto["color"]?color rojo */

// Aumentar la nota
// Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.
// ejemplo { estudinate:"juan",nota:6},{ estudinate:"mario",nota:8} output { estudinate:"juan",nota:8},{ estudinate:"mario",nota:10} 
/* const estudiantes =[
    {estudiante:"Juan", nota: 7},
    {estudiante:"Pedro", nota: 6},
    {estudiante:"Maria", nota: 3},
    {estudiante:"Noa", nota: 9},
    {estudiante:"Julieta", nota: 2},
    {estudiante:"Lorenzo", nota: 4}

];
const estudiantesAct=estudiantes.map(estudiante=>{
   if(estudiante.nota>=5){
    estudiante.nota=Math.min(estudiante.nota+2,10);
   } 
   return estudiante
});
console.log(estudiantesAct); */

     //           Base De Datos De Películas
    //  En este ejercicio, deberás crear un Arreglo llamado películas, que tenga -por cada película- un Objeto con las siguientes Propiedades:
/*  const peliculas =[];
for (let i=0;i<5;i++){
    let titulo = prompt(`Ingrese el titulo de la pelicula  ${i + 1}: `);
    let rating = parseInt(prompt(`Ingrese el rating de la película ${i + 1} (1-5): `));
    let visto = confirm(`¿Has visto la película ${i + 1}?`);
    peliculas.push({ titulo, rating, loHasVisto: visto });
}
console.log("Películas ingresadas:");
for (let i = 0; i < peliculas.length; i++) {
  if (peliculas[i].loHasVisto) {
    console.log(`viste "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`);
  } else {
    console.log(`no viste "${peliculas[i].titulo}" - ${peliculas[i].rating} estrellas`);
  }
} */

//                  Números Duplicados
/* let numeros = [2,4,5,37,0];
let numeros_duplicados={};
//depsues deberia quedar asi{0:0,2:4,4:8,5:10,37:74}
// Recorré el Arreglo numeros y poné cada número (2, 4, 5, 37, 0) como una Propiedad del Objeto numeros_duplicados. El Valor de cada Propiedad deberá ser ese número multiplicado por dos.
for (let i = 0; i < numeros.length; i++) {
    let valor = numeros[i];
  let valor_duplicado = valor * 2;
  numeros_duplicados[valor] = valor_duplicado;
  }
  console.log(numeros_duplicados); */

//                            Desafío + 27
/* //  Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.
let personas =[{nombre:'Ana', edad: '28'},
    {nombre: 'maria',edad: '24'},{ nombre:'jose',edad:'31'}
] ;
let personasConMasDe27= personas.filter(persona=>parseInt(persona.edad) > 27);
console.log(personasConMasDe27);
//[{nombre:'ana',edad:'28'},{ nombre:'jose',edad:'31'}] */

//     Camino Al Oscar
/* // 1. Declarar una variable con un saludo y mostrar el primer caracter
let greating = "hello and welcome!"
greating[0] //H
let words = greating.split('');

// 2. Declarar un arreglo de actores principales y filtrar aquellos que comienzan con vocal
let actorVocales = [];
let actorPrincipales=['Tom Hanks','Johnny Depp','Elizabeth Taylor','Morgan',' Jenifer Aniston','Natlie Protman', 'Achton Kidchar'];

for (let i = 0; i < actorPrincipales.length; i++) {
  let nombreCompleto = actorPrincipales[i];
  let nombre = nombreCompleto.split(' ')[0];
  let apellido = nombreCompleto.split(' ')[1];
  if (/(^[AEIOUaeiou])/.test(nombre) || /(^[AEIOUaeiou])/.test(apellido)) {
    actorVocales.push(nombreCompleto);
  }
}
console.log(actorVocales); // Mostrar actores que comienzan con vocal

// 3. Declarar un objeto con películas y actores principales
let actoresPrincipalesPorPelicula={
  "titanic":"leonardo dicaprio",
  "El Padrino":"Al Pacino",
  "Iron Man": "Robert Downey Jr",
  "Matrix":"Keanu Reeves",
  "soy leyenda":" will smith"
}

// 4. Mostrar las películas
let peliculas =[];
for (let pelicula in actoresPrincipalesPorPelicula) {
  peliculas.push(pelicula);
}
console.log(peliculas); // Mostrar películas

// 5. Agregar actores principales a un arreglo y mostrarlos
let actoresPrincipalesArray = []; // Declarar un nuevo arreglo
for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  actoresPrincipalesArray.push(actor);
}
console.log(actoresPrincipalesArray); // Mostrar actores principales

// 6. Crear un objeto que relacione actores con películas
let peliculaPorActor = {};
for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  if (!peliculaPorActor[actor]) {
    peliculaPorActor[actor] = [pelicula];
  } else {
    peliculaPorActor[actor].push(pelicula);
  }
}
console.log(peliculaPorActor); // Mostrar objeto que relaciona actores con películas */

//             Posicion Adecuada----------------
let personas=[{nombre:"Alba",edad:25},
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 22 }]
    personas.sort((a, b) => a.edad - b.edad);

for (let i = 0; i < personas.length; i++) {
  personas[i].posicion = i + 1;
}

console.log(personas);

//-------------------------Software Factory
 let ecommerce=[
    { nombre:"Samsung Tv", precio:6000, articulos:10},
    { nombre:"MonitorPhilips", precio:12000, articulos:20},
    { nombre: "Smartphone", precio: 3000, articulos: 3 },
    { nombre: "Teclado logitech", precio: 3000, articulos: 5 }
 
]
function calcularValorTotal(ecommerce){
    let resultado = ecommerce.map((producto) => {
        return {
          nombre: producto.nombre,
          valorTotal: producto.precio * producto.articulos,
        };
      });
      return resultado;
}
let resultado = calcularValorTotal(ecommerce);
console.log(resultado);


