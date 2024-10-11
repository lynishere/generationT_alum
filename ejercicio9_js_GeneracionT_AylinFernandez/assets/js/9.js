//                        Matematica simple:

// Función triplicador
function triplicador(num) {
    return num * 3;
  }
  
  // Función multiplicador
  function multiplicador(a, b) {
    return a * b;
  }
  
  // Función division
  function division(a, b) {
    return a / b;
  }
  
  // Función resto
  function resto(a, b) {
    return a % b;
  }
  
  // Calculo final
/*   let resultado = triplicador(5);
  resultado = multiplicador(resultado, 15);
  resultado = division(resultado, 12);
  resultado = resto(resultado, 3);
  console.log(resultado); */

  //contarDeA_n
//En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a.
/* function contarDeA_n(contar_de_a, contar_hasta) {

    for (  let i = 1; i <= contar_hasta; i += contar_de_a) {
      console.log(i);
    }
}

let contar_de_a=parseInt(prompt("Ingrese el numero de a cuantos numero quiere contar"));
let contar_hasta=parseInt(prompt("Ingrese hasta que numero quiere contar"));
contarDeA_n(contar_de_a,contar_hasta);
 */

//                                           Desafío FizzBuzz II


function fizzBuzz2(palabra1, palabra2, hasta, fizz_num, buzz_num) {
    let resultado = [];
  
    for (let i = 1; i <= hasta; i++) {
      if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado.push(palabra1 + palabra2);
      } else if (i % fizz_num === 0) {
        resultado.push(palabra1);
      } else if (i % buzz_num === 0) {
        resultado.push(palabra2);
      } else {
        resultado.push(i.toString());
      }
    }
    return resultado.join(', ');
  }
  
  let palabra1 = prompt("Ingrese la primera palabra");
  let palabra2 = prompt("Ingrese la segunda palabra");
  let hasta=parseInt(prompt("Ingrese hasta que numero tiene que contar fizzBuzz2"));
  let fizz_num = parseInt(prompt("Ingrese numero (primera palabra)"));
  let buzz_num =parseInt(prompt("Ingrese numero (segunda palabra)"));
  
  console.log(fizzBuzz2(palabra1, palabra2, hasta, fizz_num, buzz_num));
  