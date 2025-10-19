// 🟢 Métodos que NO modifican el string original
// 🔹 Transformación y formato
// 1 - toUpperCase() = Convierte a mayúsculas.
console.log(`1- toUpperCase() = ${'mati'.toUpperCase()}`); // "MATI"

// 2 - toLowerCase() = Convierte a minúsculas.
console.log(`2- toLowerCase() = ${'MATI'.toLowerCase()}`); // "mati"

// 3 - trim() = Elimina espacios al inicio y al final.
console.log(`3- trim() = ${'  hola  '.trim()}`); // "hola"

// 4 - trimStart() = Elimina espacios al inicio.
console.log(`4- trimStart() = ${'   hola'.trimStart()}`); // "hola"

// 5 - trimEnd() = Elimina espacios al final.
console.log(`5- trimEnd() = ${'hola   '.trimEnd()}`); // "hola"

// 6 - padStart() = Rellena el inicio con un valor.
console.log(`6- padStart() = ${'5'.padStart(3, '0')}`); // "005"

// 7 - padEnd() = Rellena el final con un valor.
console.log(`7- padEnd() = ${'5'.padEnd(3, '0')}`); // "500"

// 🔹 Extracción y división
// 8 - slice() = Extrae una parte del string.
console.log(`8- slice() = ${'JavaScript'.slice(4, 10)}`); // "Script"

// 9 - substring() = Similar a slice, pero sin índices negativos.
console.log(`9- substring() = ${'JavaScript'.substring(0, 4)}`); // "Java"

// 10 - substr() = (obsoleto) Extrae desde una posición con longitud.
console.log(`10- substr() = ${'JavaScript'.substr(4, 6)}`); // "Script"

// 11 - split() = Divide el string en un array.
console.log(`11- split() = ${'a,b,c'.split(',')}`); // ['a','b','c']

// 12 - charAt() = Devuelve el carácter de un índice.
console.log(`12- charAt() = ${'Hola'.charAt(1)}`); // "o"

// 13 - charCodeAt() = Código Unicode del carácter.
console.log(`13- charCodeAt() = ${'A'.charCodeAt(0)}`); // 65

// 14 - at() = Retorna el carácter en posición (soporta negativos).
console.log(`14- at() = ${'Hola'.at(-1)}`); // "a"

// 15 - codePointAt() = Devuelve el código Unicode completo (emoji-friendly).
console.log(`15- codePointAt() = ${'😀'.codePointAt(0)}`); // 128512

//🔹 Búsqueda y comparación
// 16 - includes() = Verifica si contiene una subcadena.
console.log(`16- includes() = ${'Hola Mati'.includes('Mati')}`); // true

// 17 - startsWith() = Verifica si empieza con una subcadena.
console.log(`17- startsWith() = ${'JavaScript'.startsWith('Java')}`); // true

// 18 - endsWith() = Verifica si termina con una subcadena.
console.log(`18- endsWith() = ${'index.html'.endsWith('.html')}`); // true

// 19 - indexOf() = Índice de la primera aparición.
console.log(`19- indexOf() = ${'banana'.indexOf('na')}`); // 2

// 20 - lastIndexOf() = Índice de la última aparición.
console.log(`20- lastIndexOf() = ${'banana'.lastIndexOf('na')}`); // 4

// 21 - match() = Busca coincidencias con una expresión regular.
console.log(`21- match() = ${'hola mundo'.match(/o/g)}`); // ['o','o']

// 22 - matchAll() = Todas las coincidencias con detalles (iterador).
console.log(`22- matchAll() = ${[...('abcabc'.matchAll(/a/g))].length}`); // 2

// 23 - search() = Índice de la primera coincidencia con RegExp.
console.log(`23- search() = ${'abc123'.search(/\d/)}`); // 3


// 🔹 Reemplazo y combinación
// 24 - replace() = Reemplaza la primera coincidencia.
console.log(`24- replace() = ${'Hola mundo'.replace('mundo', 'Mati')}`); // "Hola Mati"

// 25 - replaceAll() = Reemplaza todas las coincidencias.
console.log(`25- replaceAll() = ${'a-b-a-b'.replaceAll('-', '_')}`); // "a_b_a_b"

// 26 - concat() = Une dos o más strings.
console.log(`26- concat() = ${'Hola'.concat(' ', 'Mati')}`); // "Hola Mati"

// 27 - repeat() = Repite el string n veces.
console.log(`27- repeat() = ${'Hi'.repeat(3)}`); // "HiHiHi"

//🔹 Representación y normalización
// 28 - valueOf() = Devuelve el valor primitivo del string.
console.log(`28- valueOf() = ${'Hola'.valueOf()}`); // "Hola"

// 29 - toString() = Convierte a string (redundante, pero existe).
console.log(`29- toString() = ${'Mati'.toString()}`); // "Mati"

// 30 - normalize() = Normaliza caracteres Unicode (acentos, etc).
console.log(`30- normalize() = ${'é'.normalize('NFD')}`); // "é" (separa acento)






