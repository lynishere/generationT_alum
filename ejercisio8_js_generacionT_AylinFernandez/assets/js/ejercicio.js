/*                                 variables */
/* let uno = 10;
console.log("Valor inicial de uno : ",uno);
let dos = uno;
console.log("Valor de dos : ",dos);
uno = 20;
console.log("Nuevo valor de uno : ",uno);
console.log("Valor de dos despues de cambiar uno: ",dos); */

//                     Mi Primera Página Con JavaScript

//1)Dale la bienvenida al sitio a los usuarios. (Usá alert para dar la bienvenida a tus usuarios.)
//alert("Bienvendo a nuestro sitio web");
//2)Preguntale al usuario su nombre y guardalo en una Variable.
//3)Para preguntarle al usuario su nombre, usá la Función prompt.
//let nombre = prompt("¿Cual es su nombre? ");
//4)Creá otro mensaje de saludo que incluya el nombre guardado en tu Variable.
/* let saludo = `Hola ${nombre}, Bienvenido al sitio web :)`;
alert(saludo); */
//4)Preguntale su edad y guardala en una Variable.
//let edad=parseInt(prompt("¿Cuantos años tienes?"));
//5)Creá un mensaje con su edad y loguealo en la consola.
//console.log(`La edad del usuario es: ${edad} años`);
//6)Por último, mostrale un mensaje que incluya su nombre y edad.
/* let MensajeFinal = `Hola ${nombre},tienes ${edad} años. Esperamos que disfrutes tu estancia en nuestro sitio!`; 
alert(MensajeFinal); */

//                         Mensaje con variables

//Declará las siguientes Variables y asignales un valor:
/* let nombre = "Lucia";
let edad = 18;
let cumpleaños = "16 de octubre" ;
let ciudad = "Buenos Aires";
let ocupacion = "Desarrollador web";
let pasatiempos = "Leer, jugar al fútbol y programar"; */
//Usá console.log para escribir un párrafo que combine Strings con la información guardada en las Variables.
//console.log(`El nombre de la persona es ${nombre}, tiene ${edad} años y nació el ${cumpleaños}. Vive en la ciudad de ${ciudad} y trabaja como ${ocupacion}. Sus pasatiempos son ${pasatiempos}.`);
//Ahora creá múltiples Variables en una única línea de código
// Crear múltiples variables en una única línea de código
//let apellido = "Pérez", pais = "Argentina", profesion = "Ingeniero de software";
// Utilizar console.log para mostrar las variables creadas en la misma línea
//console.log(`El apellido de la persona es ${apellido}, nació en ${pais} y se desempeña como ${profesion}.`);

//                              Cantidad De Caracteres
//Pedile al usuario que ingrese un texto breve. Guardá su input.
/* let texto = prompt("ingrese un texto breve: ");
let input = texto; */
//Mostrá por consola cuántos caracteres tiene el input.
//console.log(`El texto ingresado tiene ${input.length} caracteres.`);

//                           Calculadora de edad
//Preguntale al usuario su edad.
//let edad = parseInt(prompt("¿Cuantos años tienes?"));
//Calculá cuántos días representa. Por ejemplo: Si tiene 28 años, serán 10.220 días. Para este ejercicio, considerá que un año tiene 365 días. No consideres el año bisiesto.
//let dias =edad * 365;
//Mostrá la respuesta al usuario.
//alert(`Usted tiene ${edad} años, lo que representa ${dias} días.`);

//    Suma de valores 
/* //Crear tres valores
let num1;
let num2;
let resultado;
//La variable resultado debera ser la suma entre num1  y num2
num1 = parseInt(prompt("Ingrese el valor de num1:"));
num2 = parseInt(prompt("Ingrese el valor de num2:"));
resultado = num1+num2;
//Mostrar por consola el valor del resultado
console.log("El resulado de la suma es ", resultado); */

//                        Calculador De Abastecimiento De Por Vida
/* //ejercicio1
//¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!
//Almacená tu edad en una Variable.
let edad = parseInt(prompt("Ingrese su edad actual:"));
//Guardá tu edad máxima en otra Variable. 
let edadMaxima = 100;
//Declará una Variable con el nombre de tu snack favorito.
let snackFavorito = "chips picantes";
//Estimá cuántos snacks comerás por día y guardalo como un número en una Variable.
let snacksPorDia = 4;
let precioSnack = 1000; //precio por unidad
//Calculá cuántos snacks te quedan por comer en el resto de tu vida.
let diasRestantes = (edadMaxima - edad) * 365;
let snacksRestantes = diasRestantes * snacksPorDia;
let gastoTotal = snacksRestantes * precioSnack;
//Mostrá el resultado en un alert: "Necesitarás NN snacks para que te alcancen hasta los XX años."
alert(`Necesitarás ${snacksRestantes} ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`);
//Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.
alert(`El gasto total será de ${gastoTotal} pesos.`); */
//Ejercicio 2
//Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida.
//Almacená en una Variable la cantidad de días que vas a estar de viaje. 
let cantidadDeDias = parseInt(prompt("Ingrese la cantidad de dias que va estar de viaje: "));
//Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
let presupuestoMaximo = parseInt(prompt("Ingrese el presupuesto que tiene para su viaje:"));
//Declará la Variable comida.
let comida = prompt("Ingrese la comida (desayuno;almuerzo,cena)");
//Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
let cantidadComidas= parseInt(prompt("¿cuántas comidas vas a tener en todo tu viaje?"));
//Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
let comidaTotal= cantidadDeDias* cantidadComidas;
let gastoComida=presupuestoMaximo/comidaTotal;
//Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".
alert(`Podés gastar ${gastoComida} pesos en cada ${comida} para que te alcance la plata durante los ${cantidadDeDias} días de viaje.`);