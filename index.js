"use strict";
// ? Higher order function
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };
// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);
// ["Saeed", "Martha", "Adam"].forEach(high5);

// ? return function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Hey");
// greeterHey("Saeed");
// greeterHey("medi");

// greet("Hello")("Saeed");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   booking: [],
//   book(fLightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${fLightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${fLightNum}`, name });
//   },
// };
// lufthansa.book(239, "Saeed Khosravi");
// lufthansa.book(435, "Medi Aboli");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   booking: [],
// };

// const book = lufthansa.book;
// // does not work
// // book(23, "Sara Williams");

// // Call method
// book.call(eurowings, 23, "Sara Williams");
// console.log(eurowings);

// book.call(lufthansa, 463, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   booking: [],
// };
// book.call(swiss, 6885, "Shahi Azam");
// console.log(swiss);

// // Apply method
// const flightData = [4826, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // ? bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Williams");

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Saeed Khosravi");
// bookEW23("Ali Khosravi");

// // with Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//   },
// };
// poll.registerNewAnswer();
// ? function declaration
// function printprops(o) {
//   for (let p in o) {
//     console.log(`${p}: ${o[p]}\n`);
//   }
// }
// printprops({ name: "Saeed", age: 33 });

// function distance(x1, y1, x2, y2) {
//   let dx = x2 - x1;
//   let dy = y2 - y1;
//   return Math.sqrt(dx * dx + dy * dy);
// }
// let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
// console.log(total);

// console.log(distance(2, 3, 4, 5));

// function factorial(x) {
//   if (x <= 1) return 1;
//   return x * factorial(x - 1);
// }
// let probability = factorial(5) / factorial(13);
// console.log(probability);

// console.log(factorial(5));

// ? function expression

// const square = function (x) {
//   return x * x;
// };
// console.log(square(2));
// const f = function fact(x) {
//   if (x <= 1) return 1;
//   else return x * fact(x - 1);
// };
// console.log(f(4));

// console.log(
//   [3, 2, 4, 23, 1].sort(function (a, b) {
//     return a - b;
//   })
// );

// let tensquared = (function (x) {
//   return x * x;
// })(10);

// console.log(tensquared);
// ? arrow function

// const sum = (x, y) => x * y;
// console.log(sum(5, 6));

// const polynomial = (x) => x * x + 2 * x + 3;
// console.log(polynomial(3));

// const constantFunc = () => 42;
// console.log(constantFunc());

// const f = (name) => {
//   return { name: { name } };
// };
// console.log(f !== null && f !== undefined ? f() : undefined);
// const g = (name) => ({
//   name: {
//     name,
//   },
// });

// console.log(f("Saeed"));
// console.log(g("Saeed"));

// let filtered = [1, null, 2, 3].filter((x) => x !== null);
// console.log(filtered);

// let squares = [1, 2, 3, 4].map((x) => x * x);
// console.log(squares);

// function hypotenuse(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return Math.sqrt(square(a) + square(b));
// }
// console.log(hypotenuse(2, 5));

// const strict = (function () {
//   return !this;
// })();

// console.log(strict);

// let calculator = {
//   operand1: 1,
//   operand2: 1,
//   add() {
//     this.result = this.operand1 + this.operand2;
//   },
// };
// calculator.add();
// calculator.result;

// function getPropertyNames(o, a = []) {
//   //   if (a === undefined) a = [];
//   //   a = a || [];
//   for (let property in o) a.push(property);
//   return a;
// }

// console.log(getPropertyNames([1, 2, 3]));

// const rectangle = (width, height = width * 2) => ({ width, height });
// console.log(rectangle(3));

// ! rest parameter
// function max(first = -Infinity, ...rest) {
//   let maxValue = first;
//   for (let n of rest) {
//     if (n > maxValue) {
//       maxValue = n;
//     }
//   }
//   return maxValue;
// }
// ! arguments object
// function max(x) {
//   let maxValue = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > maxValue) maxValue = arguments[i];
//   }
//   return maxValue;
// }
// console.log(max(15, 32, 7, 65, 482, 4, 618));

// function timed(f) {
//   return function (...args) {
//     console.log(`Entering function ${f.name}`);
//     let startTime = Date.now();
//     try {
//       return f(...args);
//     } finally {
//       console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
//     }
//   };
// }

// function benchmark(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   return sum;
// }

// console.log(timed(benchmark)(1000000));

// function vectorAdd(v1, v2) {
//   return [v1[0] + v2[0], v1[1] + v2[1]];
// }
// function vectorAdd([x1, y1], [x2, y2]) {
//   return [x1 + x2, y1 + y2];
// }

// console.log(vectorAdd([1, 2], [3, 4]));

// function vectorMultiply({ x, y }, scalar) {
//   return { x: x * scalar, y: y * scalar };
// }
// console.log(vectorMultiply({ x: 1, y: 2 }, 2));

// function vectorAdd({ x: x1, y: y1 }, { x: x2, y: y2 }) {
//   return { x: x1 + x2, y: y1 + y2 };
// }

// console.log(vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 }));

// function vectorMultiply({ x, y, z = 0 }, scalar) {
//   return { x: x * scalar, y: y * scalar, z: z * scalar };
// }
// console.log(vectorMultiply({ x: 1, y: 2 }, 2));

// function arrayCopy({
//   from,
//   to = from,
//   n = from.length,
//   fromIndex = 0,
//   toIndex = 0,
// }) {
//   let valuesToCopy = from.slice(fromIndex, fromIndex + n);
//   to.splice(toIndex, 0, ...valuesToCopy);
//   return to;
// }
// let a = [1, 2, 3, 4, 5],
//   b = [9, 8, 7, 6, 5];
// console.log(arrayCopy({ from: a, n: 3, to: b, toIndex: 4 }));

// function f([x, y, ...coords], ...rest) {
//   return [x + y, ...rest, ...coords];
// }
// console.log([1, 2, 3, 4], 5, 6);

// function vectorMultiply({ x, y, z = 0, ...props }, scalar) {
//   return { x: x * scalar, y: y * scalar, z: z * scalar, ...props };
// }

// console.log(vectorMultiply({ x: 1, y: 2, w: -1 }, 2));

// function sum(a) {
//   let total = 0;
//   for (let element of a) {
//     if (typeof element !== "number") {
//       throw new TypeError("sum(): elements must be numbers");
//     }
//     total += element;
//   }
//   return total;
// }
// console.log(sum([1, 2, 3]));
// // console.log(sum(1, 2, 3));
// console.log(sum([1, 2, "3"]));

// ? function as values
// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// function operate(operator, operand1, operand2) {
//   return operator(operand1, operand2);
// }

// console.log(operate(divide, operate(add, 2, 3), operate(multiply, 4, 5)));

// const operators = {
//   add: (x, y) => x + y,

//   subtract: (x, y) => x - y,

//   multiply: (x, y) => x * y,

//   divide: (x, y) => x / y,
//   pow: Math.pow,
// };

// function operate2(operation, operand1, operand2) {
//   if (typeof operators[operation] === "function") {
//     return operators[operation](operand1, operand2);
//   } else throw "Unknown operator";
// }
// console.log(operate2("add", "hello", operate2("add", " ", "world")));
// console.log(operate2("pow", 10, 2));
// console.log(operate2("add", 5, 6));

// ? closures

// let scope = "global scope";
// function checkscope() {
//   let scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f;
// }
// let s = checkscope()();
// console.log(s);

// let uniqueInteger = (function () {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// })();

// console.log(uniqueInteger());
// console.log(uniqueInteger());
// console.log(uniqueInteger());

// function counter() {
//   let n = 0;
//   return {
//     count: function () {
//       return n++;
//     },
//     reset: function () {
//       n = 0;
//     },
//   };
// }
// let c = counter(),
//   d = counter();
// console.log(c.count());
// console.log(d.count());
// console.log(c.reset());
// console.log(c.count());
// console.log(d.count());
// console.log(c.count());
// console.log(d.count());

// function counter(n) {
//   return {
//     get count() {
//       return n++;
//     },
//     set count(m) {
//       if (m > n) n = m;
//       else throw Error("count can only be set to a larger value");
//     },
//   };
// }
// let c = counter(1000);
// console.log(c.count);
// console.log(c.count);
// console.log(c.count);
// console.log((c.count = 2000));
// console.log(c.count);
// console.log(c.count);
// function addPrivateProperty(o, name, predicate) {
//   let value;
//   o[`get${name}`] = function () {
//     return value;
//   };
//   o[`set${name}`] = function (v) {
//     if (predicate && !predicate(v)) {
//       throw new TypeError(`set${name}: invalid value ${v}`);
//     } else {
//       value = v;
//     }
//   };
// }

// let o = {};

// addPrivateProperty(o, "Name", (x) => typeof x === "string");

// o.setName("Frank");
// console.log(o.getName());
// // console.log(o.setName(0));

// function constfunc(v) {
//   return () => v;
// }
// let funcs = [];
// for (var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// console.log(funcs[9]());

// function constfuncs() {
//   let funcs = [];
//   for (let i = 0; i < 10; i++) {
//     funcs[i] = () => i;
//   }
//   return funcs;
// }

// let funcs = constfuncs();
// console.log(funcs[5]());

// function trace(o, m) {
//   let original = o[m];
//   o[m] = function (...args) {
//     console.log(new Date(), "Entering", m);
//     let result = original.apply(this, args);
//     console.log(new Date(), "Exiting", m);
//     return result;
//   };
// }

// console.log(trace());
// ? bind
// function f(y) {
//   return this.x + y;
// }
// let o = { x: 3 };
// let g = f.bind(o);
// // console.log(g(2));
// let p = { x: 10, g };
// console.log(p.g(2));

// let sum = (x, y) => x + y;
// let succ = sum.bind(null, 1);
// console.log(succ(5));

// function f(y, z) {
//   return this.x + y + z;
// }
// let g = f.bind({ x: 1 }, 2);
// console.log(g(3));
// ? functional programming
// const map = function (a, ...args) {
//   return a.map(...args);
// };
// const reduce = function (a, ...args) {
//   return a.reduce(...args);
// };

// const sum = (x, y) => x + y;
// const square = (x) => x * x;

// let data = [1, 1, 3, 5, 5];
// let mean = reduce(data, sum) / data.length;
// let deviations = map(data, (x) => x - mean);
// let stddev = Math.sqrt(
//   reduce(map(deviations, square), sum) / (data.length - 1)
// );

// console.log(stddev);

// ? higher order functions
// function not(f) {
//   return function (...args) {
//     let result = f.apply(this, args);
//     return !result;
//   };
// }
// const even = (x) => x % 2 === 0;
// const odd = not(even);
// console.log([(1, 1, 3, 5, 5)].every(odd));

// const map = function (a, ...args) {
//   return a.map(...args);
// };

// function mapper(f) {
//   return (a) => map(a, f);
// }

// const increment = (x) => x + 1;
// const incrementAll = mapper(increment);
// console.log(incrementAll([1, 2, 3]));

// function compose(f, g) {
//   return function (...args) {
//     return f.call(this, g.apply(this, args));
//   };
// }
// const sum = (x, y) => x + y;
// const square = (x) => x * x;
// console.log(compose(square, sum)(2, 3));

// ? partial application of functions

// function partialLeft(f, ...outerArgs) {
//   return function (...innerArgs) {
//     let args = [...outerArgs, ...innerArgs];
//     return f.apply(this, args);
//   };
// }

// function partialRight(f, ...outerArgs) {
//   return function (...innerArgs) {
//     let args = [...innerArgs, ...outerArgs];
//     return f.apply(this, args);
//   };
// }

// function partial(f, ...outerArgs) {
//   return function (...innerArgs) {
//     let args = [...outerArgs];
//     let innerIndex = 0;
//     for (let i = 0; i < args.length; i++) {
//       if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
//     }
//     args.push(...innerArgs.slice(innerIndex));

//     return f.apply(this, args);
//   };
// }
// const f = function (x, y, z) {
//   return x * (y - z);
// };

// console.log(partialLeft(f, 2)(3, 4));
// console.log(partialRight(f, 2)(3, 4));
// console.log(partial(f, undefined, 2)(3, 8, 12));

// const increment = partialLeft(sum, 1);
// const cuberoot = partialRight(Math.pow, 1 / 3);

// console.log(cuberoot(increment(26)));
// const not = partialLeft(compose, (x) => !x);
// const even = (x) => x % 2 === 0;
// const odd = not(even);
// const isNumber = not(isNaN);
// console.log(odd(3) && isNumber(2));

// const product = (x, y) => x * y;
// const neg = partial(product, -1);
// const sqrt = partial(Math.pow, undefined, 0.5);
// const reciprocal = partial(Math.pow, undefined, neg(1));

// let data = [1, 1, , 3, 5, 5];
// let mean = product(reduce(data, sum), reciprocal(data.length));
// let stddev = sqrt(
//   product(
//     reduce(map(data, compose(square, partial(sum, neg(mean)))), sum),
//     reciprocal(sum(data.length, neg(1)))
//   )
// );
// console.log([mean, stddev]);

// ? momoization

// function memoize(f) {
//   const cache = new Map();
//   return function (...args) {
//     let key = args.length + args.join("+");
//     if (cache.has(key)) {
//       return cache.get(key);
//     } else {
//       let result = f.apply(this, args);
//       cache.set(key, result);
//       return result;
//     }
//   };
// }

// function gcd(a, b) {
//   if ((a, b)) {
//     [a, b] = [b, a];
//   }
//   while (b !== 0) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }
// const gcdmemo = memoize(gcd);
// console.log(gcdmemo(85, 187));

// const factorial = memoize(function (n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// });
// console.log(factorial(5));
// ? simple javascript class

// function range(from, to) {
//   let r = Object.create(range.methods);
//   r.from = from;
//   r.to = to;
//   return r;
// }
// range.methods = {
//   includes(x) {
//     return this.from <= x && x <= this.to;
//   },
//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
//   toString() {
//     return "(" + this.from + "..." + this.to + ")";
//   },
// };

// let r = range(1, 30);
// console.log(r.includes(31));
// console.log(r.toString(), [...r]);
// console.log(range.methods.isPrototypeOf(r));

// ? range class using a constructor

// function Range(from, to) {
//   this.from = from;
//   this.to = to;
// }
// Range.prototype = {
//   includes: function (x) {
//     return this.from <= x && x <= this.to;
//   },
//   [Symbol.iterator]: function* () {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
//   toString: function () {
//     return "(" + this.from + "..." + this.to + ")";
//   },
// };
// let r = new Range(1, 3);
// console.log(r.includes(2));
// console.log(r.toString(), [...r]);
// console.log(r instanceof Range);

// class Range {
//   constructor(from, to) {
//     this.from = from;
//     this.to = to;
//   }
//   includes(x) {
//     return this.from <= x && x <= this.to;
//   }
//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   }
//   toString() {
//     return `(${this.from}...${this.to})`;
//   }
// }
// let r = new Range(2, 6);
// console.log(r.includes(3));

// class Span extends Range {
//   constructor(start, length) {
//     if (length >= 0) {
//       super(start, start + length);
//     } else {
//       super(start + length, start);
//     }
//   }
// }
// let s = new Span(4, 9);
// console.log(s.toString());

// class Circle {
//   radius = 10; // Public field

//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// const myCircle = new Circle();
// console.log(myCircle.radius); // Output: 10

// ? Complex number class
// class Complex {
//   constructor(real, imaginary) {
//     this.r = real;
//     this.i = imaginary;
//   }
//   plus(that) {
//     return new Complex(this.r + that.r, this.i + that.i);
//   }
//   times(that) {
//     return new Complex(
//       this.r * that.r - this.i * that.i,
//       this.r * that.i + this.i * that.r
//     );
//   }
//   static sum(c, d) {
//     return c.plus(d);
//   }
//   static product(c, d) {
//     return c.times(d);
//   }
//   get real() {
//     return this.r;
//   }
//   get imaginary() {
//     return this.i;
//   }
//   get magnitude() {
//     return Math.hypot(this.r, this.i);
//   }
//   toString() {
//     return `{${this.r},${this.i}}`;
//   }
//   equals(that) {
//     return that instanceof Complex && this.r === that.r && this.i === that.i;
//   }
// }

// Complex.ZERO = new Complex(0, 0);
// Complex.ONE = new Complex(1, 0);
// Complex.I = new Complex(0, 1);

// let c = new Complex(2, 3);
// console.log(c);
// let d = new Complex(c.i, c.r);
// console.log(d);
// console.log(c.plus(d).toString());
// console.log(c.magnitude);
// console.log(Complex.product(c, d));
// console.log(Complex.ZERO.toString());

// Complex.prototype.conj = function () {
//   return new Complex(this.r, -this.i);
// };
// console.log(c.conj(2, 3));

// ? class compositions
// class Engine {
//   start() {
//     console.log("Engine started.");
//   }
// }

// class Car {
//   constructor() {
//     this.engine = new Engine();
//   }

//   startCar() {
//     this.engine.start();
//     console.log("Car started.");
//   }
// }

// const myCar = new Car();
// myCar.startCar();

// ? a hierarchy of abstract and concrete set classes

// class AbstractSet {
//   has(x) {
//     throw new Error("Abstract method");
//   }
// }

// class NotSet extends AbstractSet {
//   constructor(set) {
//     super();
//     this.set = set;
//   }
//   has(x) {
//     return !this.set.has(x);
//   }
//   toString() {
//     return `{x| x > ${this.set.toString()}}`;
//   }
// }

// class RangeSet extends AbstractSet {
//   constructor(from, to) {
//     super();
//     this.from = from;
//     this.to = to;
//   }
//   has(x) {
//     return x >= this.from && x <= this.to;
//   }
//   toString() {
//     return `{ x| ${this.from} <= x <= ${this.to}}`;
//   }
// }

// class AbstractEnumerableSet extends AbstractSet {
//   get size() {
//     throw new Error("Abstract method");
//   }
//   [Symbol.iterator]() {
//     throw new Error("Abstract method");
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   toString() {
//     return `{${Array.from(this).join(". ")}}`;
//   }
//   equals(set) {
//     if (!(set instanceof AbstractEnumerableSet)) return false;
//     if (this.size !== set.size) return false;
//     for (let element of this) {
//       if (!set.has(element)) return false;
//     }
//     return true;
//   }
// }

// class SingletonSet extends AbstractEnumerableSet {
//   constructor(member) {
//     super();
//     this.member = member;
//   }
//   has(x) {
//     return x === this.member;
//   }
//   get size() {
//     return 1;
//   }
//   *[Symbol.iterator]() {
//     yield this.member;
//   }
// }

// class AbstractWriteableSet extends AbstractEnumerableSet {
//   insert(x) {
//     throw new Error("Abstract method");
//   }
//   remove(x) {
//     throw new Error("Abstract method");
//   }
//   add(set) {
//     for (let element of set) {
//       this.insert(element);
//     }
//   }
//   subtract(set) {
//     for (let element of set) {
//       this.remove(element);
//     }
//   }
//   intersect(set) {
//     for (let element of this) {
//       if (!set.has(element)) {
//         this.remove(element);
//       }
//     }
//   }
// }

// class BitSet extends AbstractEnumerableSet {
//   constructor(max) {
//     super();
//     this.max = max;
//     this.n = 0;
//     this.numBytes = Math.floor(max / 8) + 1;
//     this.data = new Uint8Array(this.numBytes);
//   }
//   _valid(x) {
//     return Number.isInteger(x) && x >= 0 && x <= this.max;
//   }
//   _has(byte, bit) {
//     return (this.data[byte] & BitSet.bits[bit]) !== 0;
//   }
//   has(x) {
//     if (this._valid(x)) {
//       let byte = Math.floor(x / 8);
//       let bit = x % 8;
//       return this._has(byte, bit);
//     } else {
//       return false;
//     }
//   }
//   insert(x) {
//     if (this._valid(x)) {
//       let byte = Math.floor(x / 8);
//       let bit = x % 8;
//       if (!this._has(byte, bit)) {
//         this.data[byte] |= BitSet.bits[bit];
//         this.n++;
//       }
//     } else {
//       throw new TypeError("Invalid set element: " + x);
//     }
//   }
//   remove(x) {
//     if (this._valid(x)) {
//       let byte = Math.floor(x / 8);
//       let bit = x % 8;
//       if (this._has(byte, bit)) {
//         this.data[byte] &= BitSet.masks[bit];
//         this.n--;
//       }
//     } else {
//       throw new TypeError("Invalid set element " + x);
//     }
//   }
//   get size() {
//     return this.n;
//   }
//   *[Symbol.iterator]() {
//     for (let i = 0; i <= this.max; i++) {
//       if (this.has(i)) {
//         yield i;
//       }
//     }
//   }
// }

// BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
// BitSet.masks = new Uint8Array([~1, ~1, ~4, ~8, ~16, ~32, ~64, ~128]);

// console.log(BitSet.bits);
// console.log(BitSet.masks);
// ? JS standard library

// ! set
// let s = new Set();
// let t = new Set([1, s]);
// console.log(t);

// let unique = new Set("missisippi");
// console.log(unique);

// console.log(s.size);
// console.log(s.add(1));
// console.log(s.add(true));
// console.log(s.add([1, 2, 3]));
// console.log(s.size);
// console.log(s.delete(1));
// console.log(s.size);
// console.log(s.delete([1, 2, 3]));
// console.log(s.clear());
// console.log(s);
// console.log(s.add("a").add("b").add("c"));

// let oneDigitPrimes = new Set([2, 3, 5, 7]);
// console.log(oneDigitPrimes.has(3));

// let sum = 0;
// for (let p of oneDigitPrimes) {
//   sum += p;
// }
// console.log(sum);

// console.log([...oneDigitPrimes]);
// console.log(Math.max(...oneDigitPrimes));

// let product = 1;
// oneDigitPrimes.forEach((n) => {
//   product *= n;
// });
// console.log(product);
// ! map

// let m = new Map();
// console.log(m.set("one", 1));
// console.log(m.set("two", 2));
// console.log(m.set("one", true));
// console.log(m.clear());
// let m = new Map().set("one", 1).set("two", 2).set("three", 3);
// console.log(m);
// console.log(m.size);
// console.log(m.get("two"));
// let m = new Map([
//   ["one", 1],
//   ["two", 2],
// ]);
// console.log([...m]);
// console.log([...m.keys()]);
// console.log([...m.values()]);
// console.log([...m.entries()]);

// let n = new Map([
//   ["one", 1],
//   ["two", 2],
// ]);
// console.log(n);

// let copy = new Map(n);
// let o = { x: 1, y: 2 };
// let p = new Map(Object.entries(o));

// console.log(copy);
// console.log(o);
// console.log(p);
// ? typed array

// let bytes = new Uint8Array(1024);
// let matrix = new Float64Array(9);
// let point = new Int16Array(3);
// let rgba = new Uint8ClampedArray(4);
// let sudoku = new Int8Array(81);

// console.log(bytes);
// console.log(matrix);
// console.log(point);
// console.log(rgba);
// console.log(sudoku);

// let white = Uint8ClampedArray.of(255, 255, 255, 0);
// console.log(white);

// let ints = Uint32Array.from(white);
// console.log(ints);

// console.log(Uint8Array.of(1.23, 2.99, 45000));

// let buffer = new ArrayBuffer(1024 * 1024);
// console.log(buffer.byteLength);

function sieve(n) {
  let a = new Uint8Array(n + 1);
  let max = Math.floor(Math.sqrt(n));
  let p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) a[i] = 1;
    while (a[++p] /* empty */);
  }
  while (a[n]) n--;
  return n;
}
console.log(sieve(999));
