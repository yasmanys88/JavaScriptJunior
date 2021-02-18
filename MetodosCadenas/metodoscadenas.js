let cadena = "Cadena yasmany yasmany ";
let cadena2 = "Cadena";
// concat() - junta dos cadenas y retorna una nueva

resultado = cadena.concat(cadena2);
document.write(resultado.concat(" terminando cadena"));
//startsWith() y endWith()
resultado2 = cadena.startsWith(cadena2);
document.write("<br>startsWith: " + resultado2);

//includes()
resultado3 = cadena.includes("yasmany");
document.write("<br>includes: " + resultado3);

//indexOf() devuelve indice del primer caracter de la cadena, si no existe, devuelve -1
resultado4 = cadena.indexOf("yasmany");
document.write("<br> indexOf: " + resultado4);

//lastIndexOf() devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1
resultado5 = cadena.lastIndexOf("yasmany");
document.write("<br> lastIndexOf: " + resultado5);

// cadena.split([separador][,limite])  divide un objeto de tipo String en un array (vector) de cadenas

let cadenasplit = "Hola como estas";
resultado6 = cadenasplit.split(" ");
document.write("<br> split: " + resultado6);

//cadena.substring(indiceA[, indiceB'])método devuelve un subconjunto de un objeto String.
resultado7 = cadenasplit.substring(0, 4);
document.write("<br> substring: " + resultado7);

//trim( ) elimina los espacios en blanco en ambos extremos del string.
let cadenaespacio = "   pedro   ";
document.write("<br> Antes del trim() el tamaño es: " + cadenaespacio.length);
resultado8 = cadenaespacio.trim();
document.write("<br> Despues del trim() el tamaño es: " + resultado8.length);
