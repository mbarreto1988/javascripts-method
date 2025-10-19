// 🔸 Métodos de JSON
// 1️⃣ JSON.parse() = Convierte un string en formato JSON a un objeto JavaScript.
const texto = '{"nombre":"Mati","edad":30}';
const obj = JSON.parse(texto);
console.log(`1- JSON.parse() =`, obj); // { nombre: 'Mati', edad: 30 }

// 2️⃣ JSON.stringify() = Convierte un objeto JavaScript en un string JSON.
const persona = { nombre: 'Mati', edad: 30 };
const json = JSON.stringify(persona);
console.log(`2- JSON.stringify() = ${json}`); // '{"nombre":"Mati","edad":30}'

// 3️⃣ JSON.stringify() con formato legible = Podés agregar parámetros para indentar y hacerlo más fácil de leer.
const personas = { nombre: 'Matias', edad: 90 };
console.log(`3- JSON.stringify(pretty) =\n`, JSON.stringify(personas, null, 2));
/*
{
  "nombre": "Mati",
  "edad": 30
}
*/

// 4️⃣ JSON.stringify() con filtro = Podés pasar un array de claves o una función replacer.
const personitas = { nombre: 'Matias Gabriel', edad: 37 };
console.log(`4- JSON.stringify(filtro) =`, JSON.stringify(personitas, ['nombre'])); // '{"nombre":"Mati"}'












