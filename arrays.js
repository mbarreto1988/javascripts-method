// 🟢 Métodos que NO modifican el array original
// 1 - concat() = Une dos o más arrays y devuelve uno nuevo.
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(`1- concat() = ${a.concat(b)}`); // [1,2,3,4,5,6]

// 2 - filter() = Devuelve un nuevo array con los elementos que cumplen una condición.
const nums = [1, 2, 3, 4, 5];
console.log(`2- filter() = ${nums.filter(n => n % 2 === 0)}`); // [2,4]

// 3 - map() = Transforma cada elemento y devuelve uno nuevo.
const num = [1, 2, 3];
console.log(`3- map() = ${num.map(n => n * 2)}`); // [2,4,6]

// 4 - slice() = Devuelve una copia parcial del array.
const letras = ['a', 'b', 'c', 'd'];
console.log(`4- slice() = ${letras.slice(1, 3)}`); // ['b','c']

// 5 - reduce() = Reduce a un solo valor.
const valores = [1, 2, 3, 4];
console.log(`5- reduce() = ${valores.reduce((a, v) => a + v, 0)}`); // 10

// 6 - reduceRight() = Igual que reduce pero de derecha a izquierda.
const valores2 = [1, 2, 3, 4];
console.log(`6- reduceRight() = ${valores2.reduceRight((a, v) => a - v)}`); // -2

// 7 - flat() = Aplana arrays anidados.
const arrayAnidado = [1, [2, [3, [4]]]];
console.log(`7- flat() = ${arrayAnidado.flat(2)}`); // [1,2,3,[4]]

// 8 - flatMap() = Aplica map() y luego aplana.
const palabras = ['hola', 'mundo'];
console.log(`8- flatMap() = ${palabras.flatMap(p => p.split(''))}`); // ['h','o','l','a','m','u','n','d','o']

// 9 - join() = Une todos los elementos en una cadena.
const elementos = ['Hola', 'Mati', '!'];
console.log(`9- join() = ${elementos.join(' ')}`); // "Hola Mati !"

// 10 - includes() = Verifica si contiene un valor.
const frutas = ['manzana', 'banana', 'pera'];
console.log(`10- includes() = ${frutas.includes('banana')}`); // true

// 11 - indexOf() = Devuelve el índice del valor (o -1).
const colores = ['blanco', 'rojo', 'verde'];
console.log(`11- indexOf() = ${colores.indexOf('verde')}`); // 2

// 12 - lastIndexOf() = Igual que indexOf pero desde el final.
const nums2 = [1, 2, 1, 3];
console.log(`12- lastIndexOf() = ${nums2.lastIndexOf(1)}`); // 2

// 13 - find() = Primer elemento que cumple una condición.
const numeros = [5, 12, 8, 130];
console.log(`13- find() = ${numeros.find(n => n > 10)}`); // 12

// 14 - findIndex() = Índice del primer elemento que cumple la condición.
console.log(`14- findIndex() = ${numeros.findIndex(n => n > 10)}`); // 1

// 15 - findLast() = Último elemento que cumple la condición.
console.log(`15- findLast() = ${numeros.findLast(n => n > 10)}`); // 130

// 16 - findLastIndex() = Índice del último elemento que cumple la condición.
console.log(`16- findLastIndex() = ${numeros.findLastIndex(n => n > 10)}`); // 3

// 17 - entries() = Iterador con pares índice/valor.
const letras2 = ['a', 'b'];
for (const [i, val] of letras2.entries()) console.log(`17- entries() = ${i}:${val}`);

// 18 - keys() = Iterador de índices.
for (const k of letras2.keys()) console.log(`18- keys() = ${k}`);

// 19 - values() = Iterador de valores.
for (const v of letras2.values()) console.log(`19- values() = ${v}`);

// 20 - toReversed() = Copia invertida del array (no muta).
const arr = [1, 2, 3];
console.log(`20- toReversed() = ${arr.toReversed()}`); // [3,2,1]

// 21 - toSorted() = Versión inmutable de sort().
const arr2 = [3, 1, 2];
console.log(`21- toSorted() = ${arr2.toSorted()}`); // [1,2,3]

// 22 - toSpliced() = Versión inmutable de splice().
const arr3 = [1, 2, 3];
console.log(`22- toSpliced() = ${arr3.toSpliced(1, 1)}`); // [1,3]

// 23 - with() = Crea copia con un valor modificado.
const arr4 = [10, 20, 30];
console.log(`23- with() = ${arr4.with(1, 99)}`); // [10,99,30]

// 24 - toString() = Convierte a string.
const arrayToString = [1, 2, 3];
console.log(`24- toString() = ${arrayToString.toString()}`); // "1,2,3"

// 25 - valueOf() = Devuelve el valor primitivo.
const arrayValueOf = [1, 2, 3];
console.log(`25- valueOf() = ${arrayValueOf.valueOf()}`); // [1,2,3]


//🔴 Métodos que SÍ modifican el array original
// 26 - sort() = Ordena los elementos.
const desordenados = [40, 1, 5, 200];
desordenados.sort((a, b) => a - b);
console.log(`26- sort() = ${desordenados}`); // [1,5,40,200]

// 27 - reverse() = Invierte el orden.
const ordenados = [1, 2, 3, 4, 5];
ordenados.reverse();
console.log(`27- reverse() = ${ordenados}`); // [5,4,3,2,1]

// 28 - fill() = Rellena con un valor.
const arrayFill = [1, 2, 3, 4];
arrayFill.fill(0, 1, 3);
console.log(`28- fill() = ${arrayFill}`); // [1,0,0,4]

// 29 - splice() = Agrega o elimina elementos.
const arraySplice = ['Jan', 'March', 'April', 'June'];
arraySplice.splice(1, 0, 'Feb');
console.log(`29- splice() = ${arraySplice}`); // ['Jan','Feb','March','April','June']

// 30 - push() = Agrega al final.
const arrayPush = [1, 2, 3];
arrayPush.push(4, 5);
console.log(`30- push() = ${arrayPush}`); // [1,2,3,4,5]

// 31 - pop() = Saca el último.
const arrayPop = [1, 2, 3, 4];
arrayPop.pop();
console.log(`31- pop() = ${arrayPop}`); // [1,2,3]

// 32 - shift() = Saca el primero.
const arrayShift = [1, 2, 3];
arrayShift.shift();
console.log(`32- shift() = ${arrayShift}`); // [2,3]

// 33 - unshift() = Agrega al principio.
const arrayUnshift = [2, 3];
arrayUnshift.unshift(0, 1);
console.log(`33- unshift() = ${arrayUnshift}`); // [0,1,2,3]

// 34 - copyWithin() = Copia parte del array en sí mismo.
const arrayCopy = [1, 2, 3, 4];
arrayCopy.copyWithin(1, 2);
console.log(`34- copyWithin() = ${arrayCopy}`); // [1,3,4,4]


// ⚪ Iteración y verificación
// 35 - forEach() = Ejecuta una función por cada elemento.
[1, 2, 3].forEach(n => console.log(`35- forEach() = ${n}`));

// 36 - some() = Al menos uno cumple la condición.
const edades = [3, 10, 18, 20];
console.log(`36- some() = ${edades.some(e => e >= 18)}`); // true

// 37 - every() = Todos cumplen la condición.
console.log(`37- every() = ${edades.every(e => e >= 18)}`); // false


// 🔸 Métodos estáticos de Array
// 38 - Array.from() = Crea un array desde algo iterable.
console.log(`38- Array.from() = ${Array.from('Mati')}`); // ['M','a','t','i']

// 39 - Array.isArray() = Verifica si es un array.
console.log(`39- Array.isArray() = ${Array.isArray([1,2,3])}`); // true

// 40 - Array.of() = Crea un array con los valores dados.
console.log(`40- Array.of() = ${Array.of(1,2,3)}`); // [1,2,3]

