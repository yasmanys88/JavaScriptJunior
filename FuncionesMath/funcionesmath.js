//Math.sqrt() retorna la raíz cuadrada de un número
Math.sqrt(9); // 3
Math.sqrt(-1); // NaN

//Math.cbrt()función devuelve la raíz cúbica de un número
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(27); // 3
Math.cbrt(null); // 0

//Math.max()función devuelve el mayor de los cero o más números dados como parámetros de entrada, 
// o NaNsi algún parámetro no es un número y no se puede convertir en uno.
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20

//Math.random()función devuelve un número pseudoaleatorio de punto flotante en el rango de 0 a menos de 1 (incluido 0, pero no 1) 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3));  // expected output: 0, 1 or 2
console.log(getRandomInt(1));  // expected output: 0
console.log(Math.random());  // expected output: a number from 0 to <1