// 🔸 Métodos de Math
// 🔹 Redondeo y truncado
// 1 - Math.round() = Redondea al entero más cercano.
console.log(`1- Math.round() = ${Math.round(4.6)}`); // 5

// 2 - Math.floor() = Redondea hacia abajo.
console.log(`2- Math.floor() = ${Math.floor(4.9)}`); // 4

// 3 - Math.ceil() = Redondea hacia arriba.
console.log(`3- Math.ceil() = ${Math.ceil(4.1)}`); // 5

// 4 - Math.trunc() = Elimina los decimales (sin redondear).
console.log(`4- Math.trunc() = ${Math.trunc(4.9)}`); // 4

// 🔹 Potencias, raíces y valores absolutos
// 5 - Math.pow() = Potencia (base, exponente).
console.log(`5- Math.pow() = ${Math.pow(2, 3)}`); // 8

// 6 - Math.sqrt() = Raíz cuadrada.
console.log(`6- Math.sqrt() = ${Math.sqrt(9)}`); // 3

// 7 - Math.cbrt() = Raíz cúbica.
console.log(`7- Math.cbrt() = ${Math.cbrt(27)}`); // 3

// 8 - Math.abs() = Valor absoluto.
console.log(`8- Math.abs() = ${Math.abs(-5)}`); // 5


// 🔹 Aleatorios y signos
// 9 - Math.random() = Devuelve número aleatorio entre 0 (incluido) y 1 (excluido).
console.log(`9- Math.random() = ${Math.random()}`);

// 10 - Math.sign() = Devuelve el signo (-1, 0 o 1).
console.log(`10- Math.sign() = ${Math.sign(-20)}`); // -1


// 🔹 Máximos y mínimos
// 11 - Math.max() = Mayor de una lista.
console.log(`11- Math.max() = ${Math.max(1, 3, 2)}`); // 3

// 12 - Math.min() = Menor de una lista.
console.log(`12- Math.min() = ${Math.min(1, 3, 2)}`); // 1


// 🔹 Logaritmos y exponenciales
// 13 - Math.exp() = e^x (número de Euler elevado a x).
console.log(`13- Math.exp() = ${Math.exp(1)}`); // 2.718...

// 14 - Math.expm1() = e^x - 1
console.log(`14- Math.expm1() = ${Math.expm1(1)}`); // 1.718...

// 15 - Math.log() = Logaritmo natural (base e).
console.log(`15- Math.log() = ${Math.log(10)}`);

// 16 - Math.log10() = Logaritmo base 10.
console.log(`16- Math.log10() = ${Math.log10(100)}`); // 2

// 17 - Math.log2() = Logaritmo base 2.
console.log(`17- Math.log2() = ${Math.log2(8)}`); // 3

// 18 - Math.log1p() = Logaritmo natural de (1 + x)
console.log(`18- Math.log1p() = ${Math.log1p(1)}`); // 0.693...


// 🔹 Trigonometría
// 19 - Math.sin() = Seno (en radianes).
console.log(`19- Math.sin() = ${Math.sin(Math.PI / 2)}`); // 1

// 20 - Math.cos() = Coseno.
console.log(`20- Math.cos() = ${Math.cos(0)}`); // 1

// 21 - Math.tan() = Tangente.
console.log(`21- Math.tan() = ${Math.tan(Math.PI / 4)}`); // ~1

// 22 - Math.asin() = Arco seno.
console.log(`22- Math.asin() = ${Math.asin(1)}`); // 1.5707...

// 23 - Math.acos() = Arco coseno.
console.log(`23- Math.acos() = ${Math.acos(0)}`); // 1.5707...

// 24 - Math.atan() = Arco tangente.
console.log(`24- Math.atan() = ${Math.atan(1)}`); // 0.785...

// 25 - Math.atan2() = Arco tangente de (y, x) (más preciso para coordenadas).
console.log(`25- Math.atan2() = ${Math.atan2(1, 1)}`); // 0.785...


// 🔹 Hiperbólicas (menos comunes)
// 26 - Math.sinh() = Seno hiperbólico.
console.log(`26- Math.sinh() = ${Math.sinh(1)}`);

// 27 - Math.cosh() = Coseno hiperbólico.
console.log(`27- Math.cosh() = ${Math.cosh(1)}`);

// 28 - Math.tanh() = Tangente hiperbólica.
console.log(`28- Math.tanh() = ${Math.tanh(1)}`);

// 29 - Math.asinh() = Arco seno hiperbólico.
console.log(`29- Math.asinh() = ${Math.asinh(1)}`);

// 30 - Math.acosh() = Arco coseno hiperbólico.
console.log(`30- Math.acosh() = ${Math.acosh(2)}`);

// 31 - Math.atanh() = Arco tangente hiperbólica.
console.log(`31- Math.atanh() = ${Math.atanh(0.5)}`);


// 🔹 Constantes matemáticas
// 32 - Math.PI = π (3.1415...)
console.log(`32- Math.PI = ${Math.PI}`);

// 33 - Math.E = Número de Euler (~2.718)
console.log(`33- Math.E = ${Math.E}`);

// 34 - Math.SQRT2 = √2
console.log(`34- Math.SQRT2 = ${Math.SQRT2}`);

// 35 - Math.SQRT1_2 = √(1/2)
console.log(`35- Math.SQRT1_2 = ${Math.SQRT1_2}`);

// 36 - Math.LN2 = logₑ(2)
console.log(`36- Math.LN2 = ${Math.LN2}`);

// 37 - Math.LN10 = logₑ(10)
console.log(`37- Math.LN10 = ${Math.LN10}`);

// 38 - Math.LOG2E = log₂(e)
console.log(`38- Math.LOG2E = ${Math.LOG2E}`);

// 39 - Math.LOG10E = log₁₀(e)
console.log(`39- Math.LOG10E = ${Math.LOG10E}`);


