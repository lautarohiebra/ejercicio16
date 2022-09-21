const arrayStrings = ["Manzana", "Banana", "Pera", "Durazno"];
const arrayNumeros = [3, 4, 31, 12, 25, 2, 7, 8, 19];

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return arguments[0];
}
console.log(devolverPrimerElemento(...arrayStrings));

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return arguments[arguments.length - 1];
}
console.log(devolverUltimoElemento(...arrayStrings));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return arguments.length;
}
console.log(obtenerLargoDelArray(...arrayStrings));

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let arrayIncrementado = array.map((element) => element + 1);
  return arrayIncrementado;
}
console.log(incrementarPorUno(arrayNumeros));

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray(arrayStrings, "Sandía"));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray(arrayStrings, "Uva"));

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hola', 'mundo!'] -> 'Hello mundo!'
  // Tu código:
  const frase = palabras.join(", ");
  return frase;
}
console.log(dePalabrasAFrase(arrayStrings));

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayContiene(arrayStrings, "Pera")); //True
console.log(arrayContiene(arrayStrings, "Tomate")); //True

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}
console.log(agregarNumeros(arrayNumeros));

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
  }
  let promedio = sum / resultadosTest.length;
  return promedio;
}
console.log(promedioResultadosTest(arrayNumeros));

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var n = Math.max.apply(null, numeros);
  return n;
}
console.log(numeroMasGrande(arrayNumeros));

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0) {
    return 0;
  } else if (arguments.length == 1) {
    return arguments[0];
  } else {
    let mul = 1;
    for (let i = 0; i < arguments.length; i++) {
      mul *= arguments[i];
    }
    return mul;
  }
}
console.log(multiplicarArgumentos());
console.log(multiplicarArgumentos(5));
console.log(multiplicarArgumentos(...arrayNumeros));

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí;
  let resultado = arreglo.filter((element) => element > 18);
  return resultado;
}
console.log(cuentoElementos(arrayNumeros));

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia >= 2 && numeroDeDia <= 7) {
    return "Es Día Laboral";
  } else if (numeroDeDia == 1 || numeroDeDia == 0) {
    return "Es fin de Semana";
  } else {
    return "Número no válido";
  }
}

console.log(diaDeLaSemana(2));

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let numero = n.toString();
  if (numero.charAt(0) == 9) {
    return true;
  } else {
    return false;
  }
}
console.log(empiezaConNueve(9120));

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let contadorCoincidencias = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == arreglo[0]) {
      contadorCoincidencias++;
    }
  }
  if (contadorCoincidencias == arreglo.length) {
    return true;
  } else {
    return false;
  }
}
let arreglo = ["a", "a", "a", "a", "x"];
console.log(todosIguales(arreglo));

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  if (
    array.includes("Enero") &&
    array.includes("Marzo") &&
    array.includes("Noviembre")
  ) {
    let arrayMesesPedidos = ["Enero", "Marzo", "Noviembre"];
    return arrayMesesPedidos;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

const arrayMeses = [
  "Marzo",
  "Febrero",
  "Junio",
  "Agosto",
  "Julio",
  "Enero",
  "Abril",
  "Noviembre",
  "Septiembre",
  "Diciembre",
  "Octubre",
  "Mayo",
];
console.log(mesesDelAño(arrayMeses));

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let resultadoMayorACien = array.filter((element) => element > 100);
  return resultadoMayorACien;
}

const arrayNumeros2 = [100, 200, 190, 140, 80];
console.log(mayorACien(arrayNumeros2));

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let arrayResultados = [];
  let suma = 0;
  let i = 1;

  while (i < 10) {
    i++;
    numero = numero + 2;
    let resultadoIteracion = numero;
    suma = suma + resultadoIteracion;
//    console.log(i);
    arrayResultados.push(resultadoIteracion);
    if (suma == i) {
    console.log("Se interrumpió la ejecución");
    break;
    }
  }
//  console.log(suma);
  return arrayResultados;
}
console.log(breakStatement(5));

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arrayResultados = [];
  let suma = 0;
  let i = 1;

  while (i < 10) {
    i++;
    numero = numero + 2;
    let resultadoIteracion = numero;
    suma = suma + resultadoIteracion;
//    console.log(i);
    arrayResultados.push(resultadoIteracion);
    if (i == 5) {
    continue
    }
  }
//  console.log(suma);
  return arrayResultados;
}

console.log(continueStatement(1));