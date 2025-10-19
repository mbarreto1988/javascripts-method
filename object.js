// 🔸 Métodos estáticos del objeto global Object
// 🔹 Creación y prototipo
// 1 - Object.create() = Crea un nuevo objeto con el prototipo especificado.
const proto = { saludar() { return 'Hola'; } };
const obj1 = Object.create(proto);
console.log(`1- Object.create() = ${obj1.saludar()}`); // "Hola"

// 2 - Object.assign() = Copia propiedades de uno o más objetos a otro.
const destino = { a: 1 };
const fuente = { b: 2 };
Object.assign(destino, fuente);
console.log(`2- Object.assign() = ${JSON.stringify(destino)}`); // {a:1,b:2}

// 3 - Object.setPrototypeOf() = Cambia el prototipo de un objeto.
const animal = { tipo: 'mamífero' };
const gato = {};
Object.setPrototypeOf(gato, animal);
console.log(`3- Object.setPrototypeOf() = ${gato.tipo}`); // "mamífero"

// 4 - Object.getPrototypeOf() = Devuelve el prototipo de un objeto.
console.log(`4- Object.getPrototypeOf() = ${Object.getPrototypeOf(gato) === animal}`); // true


// 🔹 Propiedades y descriptores
// 5 - Object.defineProperty() = Define una propiedad con control de atributos.
const persona = {};
Object.defineProperty(persona, 'nombre', { value: 'Mati', writable: false });
console.log(`5- Object.defineProperty() = ${persona.nombre}`); // "Mati"

// 6 - Object.defineProperties() = Define varias propiedades a la vez.
const user = {};
Object.defineProperties(user, {
  nombre: { value: 'Matías' },
  edad: { value: 30 }
});
console.log(`6- Object.defineProperties() = ${user.nombre}, ${user.edad}`); // "Matías, 30"

// 7 - Object.getOwnPropertyDescriptor() = Obtiene los metadatos de una propiedad.
console.log(`7- Object.getOwnPropertyDescriptor() = ${JSON.stringify(Object.getOwnPropertyDescriptor(user, 'nombre'))}`);

// 8 - Object.getOwnPropertyDescriptors() = Devuelve los descriptores de todas las propiedades.
console.log(`8- Object.getOwnPropertyDescriptors() = ${JSON.stringify(Object.getOwnPropertyDescriptors(user))}`);

// 🔹 Propiedades propias del objeto
// 9 - Object.keys() = Devuelve un array con los nombres de las propiedades.
console.log(`9- Object.keys() = ${Object.keys(user)}`); // ['nombre','edad']

// 10 - Object.values() = Devuelve un array con los valores.
console.log(`10- Object.values() = ${Object.values(user)}`); // ['Matías',30]

// 11 - Object.entries() = Devuelve pares [clave, valor].
console.log(`11- Object.entries() = ${Object.entries(user)}`); // [['nombre','Matías'],['edad',30]]

// 12 - Object.fromEntries() = Convierte pares [clave, valor] en un objeto.
const nuevo = Object.fromEntries([['pais', 'Argentina'], ['ciudad', 'Córdoba']]);
console.log(`12- Object.fromEntries() = ${JSON.stringify(nuevo)}`); // {pais:'Argentina',ciudad:'Córdoba'}

// 🔹 Propiedades del prototipo y existencia
// 13 - Object.hasOwn() = Verifica si una propiedad es propia (ES2022).
console.log(`13- Object.hasOwn() = ${Object.hasOwn(user, 'edad')}`); // true

// 14 - Object.prototype.hasOwnProperty() = Igual que hasOwn, pero más viejo.
console.log(`14- hasOwnProperty() = ${user.hasOwnProperty('nombre')}`); // true

// 15 - Object.prototype.isPrototypeOf() = Verifica si un objeto es prototipo de otro.
console.log(`15- isPrototypeOf() = ${animal.isPrototypeOf(gato)}`); // true

// 🔹 Inmutabilidad y control
// 16 - Object.freeze() = Congela el objeto (no se puede modificar).
const objFreeze = { x: 1 };
Object.freeze(objFreeze);
objFreeze.x = 9;
console.log(`16- Object.freeze() = ${objFreeze.x}`); // 1

// 17 - Object.isFrozen() = Verifica si está congelado.
console.log(`17- Object.isFrozen() = ${Object.isFrozen(objFreeze)}`); // true

// 18 - Object.seal() = Sella el objeto (no se pueden agregar ni borrar props).
const objSeal = { y: 2 };
Object.seal(objSeal);
objSeal.y = 5;
console.log(`18- Object.seal() = ${objSeal.y}`); // 5

// 19 - Object.isSealed() = Verifica si está sellado.
console.log(`19- Object.isSealed() = ${Object.isSealed(objSeal)}`); // true

// 20 - Object.preventExtensions() = Evita agregar nuevas propiedades.
const objPE = { z: 10 };
Object.preventExtensions(objPE);
objPE.nuevo = 99;
console.log(`20- Object.preventExtensions() = ${objPE.nuevo}`); // undefined

// 21 - Object.isExtensible() = Verifica si se pueden agregar propiedades.
console.log(`21- Object.isExtensible() = ${Object.isExtensible(objPE)}`); // false


// 🔹 Comparación
// 22 - Object.is() = Compara dos valores (mejor que === en algunos casos).
console.log(`22- Object.is() = ${Object.is(NaN, NaN)}`); // true
console.log(`22- Object.is() = ${Object.is(+0, -0)}`); // false

