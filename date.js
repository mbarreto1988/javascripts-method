// 🔸 Métodos estáticos de Date
// 1 - Date.now() = Timestamp actual en milisegundos desde 1970.
console.log(`1- Date.now() = ${Date.now()}`);

// 2 - Date.parse() = Convierte una fecha string a milisegundos.
console.log(`2- Date.parse() = ${Date.parse('2025-10-18T12:00:00')}`);

// 3 - Date.UTC() = Crea timestamp en UTC a partir de valores.
console.log(`3- Date.UTC() = ${Date.UTC(2025, 9, 18)}`);

// 🕓 Creación de instancias
// Crear una fecha actual
const hoy = new Date();
console.log(`Fecha actual = ${hoy}`);

// Crear una fecha específica
const cumple = new Date(1995, 4, 10, 15, 30);
console.log(`Cumpleaños = ${cumple}`);

// 🔹 Métodos “get” (obtener información de la fecha local)
// 4 - getFullYear() = Año completo.
console.log(`4- getFullYear() = ${hoy.getFullYear()}`);

// 5 - getMonth() = Mes (0–11).
console.log(`5- getMonth() = ${hoy.getMonth()}`);

// 6 - getDate() = Día del mes (1–31).
console.log(`6- getDate() = ${hoy.getDate()}`);

// 7 - getDay() = Día de la semana (0=Domingo, 6=Sábado).
console.log(`7- getDay() = ${hoy.getDay()}`);

// 8 - getHours() = Hora.
console.log(`8- getHours() = ${hoy.getHours()}`);

// 9 - getMinutes() = Minutos.
console.log(`9- getMinutes() = ${hoy.getMinutes()}`);

// 10 - getSeconds() = Segundos.
console.log(`10- getSeconds() = ${hoy.getSeconds()}`);

// 11 - getMilliseconds() = Milisegundos.
console.log(`11- getMilliseconds() = ${hoy.getMilliseconds()}`);

// 12 - getTime() = Timestamp (milisegundos desde 1970).
console.log(`12- getTime() = ${hoy.getTime()}`);

// 🔹 Métodos “get UTC” (versión en tiempo universal)
// 13 - getUTCFullYear()
console.log(`13- getUTCFullYear() = ${hoy.getUTCFullYear()}`);

// 14 - getUTCMonth()
console.log(`14- getUTCMonth() = ${hoy.getUTCMonth()}`);

// 15 - getUTCDate()
console.log(`15- getUTCDate() = ${hoy.getUTCDate()}`);

// 16 - getUTCDay()
console.log(`16- getUTCDay() = ${hoy.getUTCDay()}`);

// 17 - getUTCHours()
console.log(`17- getUTCHours() = ${hoy.getUTCHours()}`);

// 18 - getUTCMinutes()
console.log(`18- getUTCMinutes() = ${hoy.getUTCMinutes()}`);

// 19 - getUTCSeconds()
console.log(`19- getUTCSeconds() = ${hoy.getUTCSeconds()}`);

// 20 - getUTCMilliseconds()
console.log(`20- getUTCMilliseconds() = ${hoy.getUTCMilliseconds()}`);

// 🔹 Métodos “set” (modifican la fecha local)
const fecha = new Date();

// 21 - setFullYear()
fecha.setFullYear(2030);
console.log(`21- setFullYear() = ${fecha}`);

// 22 - setMonth()
fecha.setMonth(0);
console.log(`22- setMonth() = ${fecha}`);

// 23 - setDate()
fecha.setDate(15);
console.log(`23- setDate() = ${fecha}`);

// 24 - setHours()
fecha.setHours(10);
console.log(`24- setHours() = ${fecha}`);

// 25 - setMinutes()
fecha.setMinutes(45);
console.log(`25- setMinutes() = ${fecha}`);

// 26 - setSeconds()
fecha.setSeconds(30);
console.log(`26- setSeconds() = ${fecha}`);

// 27 - setMilliseconds()
fecha.setMilliseconds(500);
console.log(`27- setMilliseconds() = ${fecha}`);

// 28 - setTime()
fecha.setTime(Date.now());
console.log(`28- setTime() = ${fecha}`);

// 🔹 Métodos “set UTC” (modifican usando tiempo universal)
// 29 - setUTCFullYear()
fecha.setUTCFullYear(2028);
console.log(`29- setUTCFullYear() = ${fecha.toUTCString()}`);

// 30 - setUTCMonth()
fecha.setUTCMonth(5);
console.log(`30- setUTCMonth() = ${fecha.toUTCString()}`);

// 31 - setUTCDate()
fecha.setUTCDate(10);
console.log(`31- setUTCDate() = ${fecha.toUTCString()}`);

// 32 - setUTCHours()
fecha.setUTCHours(12);
console.log(`32- setUTCHours() = ${fecha.toUTCString()}`);

// 33 - setUTCMinutes()
fecha.setUTCMinutes(30);
console.log(`33- setUTCMinutes() = ${fecha.toUTCString()}`);

// 34 - setUTCSeconds()
fecha.setUTCSeconds(20);
console.log(`34- setUTCSeconds() = ${fecha.toUTCString()}`);

// 35 - setUTCMilliseconds()
fecha.setUTCMilliseconds(999);
console.log(`35- setUTCMilliseconds() = ${fecha.toUTCString()}`);


// 🔹 Conversión y formato
// 36 - toString()
console.log(`36- toString() = ${hoy.toString()}`);

// 37 - toDateString()
console.log(`37- toDateString() = ${hoy.toDateString()}`);

// 38 - toTimeString()
console.log(`38- toTimeString() = ${hoy.toTimeString()}`);

// 39 - toUTCString()
console.log(`39- toUTCString() = ${hoy.toUTCString()}`);

// 40 - toISOString()
console.log(`40- toISOString() = ${hoy.toISOString()}`);

// 41 - toJSON()
console.log(`41- toJSON() = ${hoy.toJSON()}`);

// 42 - toLocaleString()
console.log(`42- toLocaleString() = ${hoy.toLocaleString()}`);

// 43 - toLocaleDateString()
console.log(`43- toLocaleDateString() = ${hoy.toLocaleDateString()}`);

// 44 - toLocaleTimeString()
console.log(`44- toLocaleTimeString() = ${hoy.toLocaleTimeString()}`);





