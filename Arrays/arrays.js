let nombres = ["Yasmany", "Yanet", "David", "Elizabeth"];
document.write(nombres + "<br>" + "<br>");

//pop() elimina el último elemento de un array y lo devuelve
let resultado = nombres.pop();
document.write(resultado + "<br>");
document.write(nombres + "<br>" + "<br>");

//Shift() elimina el último elemento de un array y lo devuelve
let resultado2 = nombres.shift();
document.write(resultado2 + "<br>");
document.write(nombres + "<br>" + "<br>");

//push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
document.write(count + "<br>"); // expected output: 4
document.write(animals + "<br>" + "<br>"); // expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
document.write(animals + "<br>"); // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


//reverse() invierte el orden de los elementos de un array
const array1 = ['one', 'two', 'three'];
document.write('array1:', array1 + "<br>"); // expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
document.write('reversed:', reversed + "<br>"); // expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
document.write('array1:', array1 + "<br>"); // expected output: "array1:" Array ["three", "two", "one"]


//unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
const array2 = [1, 2, 3];
document.write(array2.unshift(4, 5) + "<br>"); // expected output: 5
document.write(array2 + "<br>"); // expected output: Array [4, 5, 1, 2, 3]

//sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
var frutas = ['guindas', 'manzanas', 'bananas'];
document.write(' Array de Frutas:', frutas + "<br>");
frutas.sort(); // ['bananas', 'guindas', 'manzanas']
document.write('Ordenando Array de Frutas:', frutas + "<br>");
var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2 porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas y estas vienen antes que las letras minúsculas.


//splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
document.write(months + "<br>"); // expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // replaces 1 element at index 4
document.write(months + "<br>"); // expected output: Array ["Jan", "Feb", "March", "April", "May"]
