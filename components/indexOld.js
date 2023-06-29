"use strict";

// function plus1(x) {
//   return x + 1;
// }
// plus1(3);
// let square = function (x) {
//   return x * x;
// };

// console.log(square(plus1(3)));

// let primes = [2, 3, 5, 7];

// console.log(primes[primes.length - 1]);

// primes.content = {
//   name: "Saeed",
// };

// console.log(primes.content?.name);

// console.log(primes.length);
// console.log(primes.push(13));
// console.log(primes);
// console.log(primes.reverse());
// ? distance between points
// let points = [
//   { x: 0, y: 0 },
//   { x: 1, y: 1 },
// ];

// points.dist = function () {
//   let p1 = this[0];
//   let p2 = this[1];
//   let a = p2.x - p1.x;
//   let b = p2.y - p1.y;
//   return Math.sqrt(a * a + b * b); // The Pythagorean theorem
// };
// console.log(points.dist());
// ? absolute value
// function abs(x) {
//   if (x >= 0) {
//     return x;
//   } else {
//     return -x;
//   }
// }
// let equality = abs(-10) === abs(10);
// console.log(equality);
// ? sum
// function sum(array) {
//   let sum = 0;
//   for (let x of array) {
//     sum += x;
//   }
//   return sum;
// }
// console.log(sum(primes));
// ? factorial
// function factorial(n) {
//   let product = 1;
//   while (n > 1) {
//     product *= n;
//     n--;
//   }
//   return product;
// }
// console.log(factorial(4));
// ---------------
// function factorial2(n) {
//   let i,
//     product = 1;
//   for (i = 2; i <= n; i++) product *= i;
//   return product;
// }
// console.log(factorial2(5));
// ? 2D geromatrix points
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   distance() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }
// let p = new Point(3, 5);
// console.log(p.distance());
// ? Character Frequency Histograms
// let numBi = 0b1000101010101;
// let numOct = 0o377;
// console.log(numBi, numOct);
// console.log(Math.pow(1000, 1 / 3));
// console.log(Math.log(10));
// console.log(Math.log(100) / Math.LN10);
// console.log(Math.log(512) / Math.LN2);
// console.log(Math.exp(3));
// let x = 9.5;
// console.log(Math.cbrt(27));
// console.log(Math.hypot(3, 4));
// console.log(Math.log10(100));
// console.log(Math.log2(1024));
// console.log(Math.log1p(x));
// console.log(Math.expm1(x));
// console.log(Math.sign(x));
// console.log(Math.imul(2, 3));
// console.log(Math.clz32(0xf));
// console.log(Math.trunc(3.9));
// console.log(Math.fround(x));
// console.log(Math.sinh(x));
// console.log(Math.asinh(x));
// let a = 1234n;
// console.log(a);
// console.log(0b1111111n);
// console.log(0o77777n);
// console.log(0x800000000000000n);
// console.log(BigInt(Number.MAX_SAFE_INTEGER));
// let stringy = "1" + "0".repeat(100);
// console.log(typeof stringy);

// console.log(1000n + 2000n);
// console.log(1000n - 2000n);
// console.log(1000n * 2000n);
// console.log(1000n / 2000n);
// console.log(1000n % 2000n);
// const biggg = 2n ** 131071n - 1n;
// console.log(typeof biggg);

// let timestamp = Date.now();
// let now = new Date();
// let ms = now.getTime();
// let iso = now.toISOString();
// console.log(timestamp);
// console.log(now);
// console.log(ms);
// console.log(iso);
// const str =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quia fugiat illum repellat tenetur, deleniti beatae dolore ducimus neque molestiae dignissimos mollitia amet ea nisi sint, at facere tempore itaque nemo veritatis earum illo deserunt. Eius animi, sit aliquam vitae enim repellendus impedit nihil consectetur amet ut nulla cupiditate totam ex ullam voluptatibus explicabo quisquam quod nam, dolore dolorem! Adipisci non optio alias ipsum eum vero beatae, aliquam repellat sit architecto itaque, nulla nemo magnam harum excepturi quisquam, animi tempora ratione corrupti numquam consequatur omnis! Cumque est blanditiis aut corrupti ea deserunt, facere hic impedit eum, maiores consectetur reprehenderit molestiae.";
// console.log(str.length);
// console.log(str.substring(5, 13));
// console.log(str.slice(50, 60));
// console.log(str.slice(-10));
// console.log(str.split(","));
// console.log(str.indexOf("lo"));
// console.log(str.startsWith("numquam"));
// console.log(str.includes("ut"));
// console.log(str.replace("ipsum", "Saeed"));
// console.log(str.trim());
// console.log("<>".repeat(10));

// let name = "Saeed";
// let greeting = `Hello ${name}`;
// console.log(greeting);
// let filename = "test";
// let linenumber = 999;
// let exception = {
//   message:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, facere.",
//   stack: "#" + 10,
// };
// let errorMessage = `\
// \u2718 Test failure at ${filename}:${linenumber}:
// ${exception.message}
// Stack trace:
// ${exception.stack}
// `;
// console.log(errorMessage);

// console.log(String.raw`\
// \u2718 Test failure at ${filename}:${linenumber}:
// ${exception.message}
// Stack trace:
// ${exception.stack}`);
// const path = String.raw`C:\Users\Username\Desktop\file.txt`;
// console.log(path); // Output: C:\Users\Username\Desktop\file.txt

// let text = "testing: 1, 2, 3";
// let pattern = /\d+/g;
// console.log(pattern.test(text));
// console.log(text.search(pattern));
// console.log(text.match(pattern));
// console.log(text.replace(pattern, "Saeed"));
// console.log(text.split(/\D+/));

// let o = {
//   name: "Saeed",
// };
// if (o !== null) {
//   console.log(o.name);
// }
// if (o) {
//   console.log(o.name);
// }
// let s = Symbol("sym_x");
// console.log(s.toString());

// let s = Symbol.for("shared");
// let t = Symbol.for("shared");
// console.log(s === t);
// console.log(s.toString());
// console.log(Symbol.keyFor(t));

// let s = "hello";
// console.log(s.toUpperCase());
// console.log(s);

// let a = [];
// console.log(a);
// let b = a;
// b[0] = "a";
// console.log(b);
// console.log(a === b);

// let aArr = ["a", "b", "c"];
// let bArr = [];
// for (let i = 0; i < aArr.length; i++) {
//   bArr[i] = aArr[i];
// }
// let c = Array.from(bArr);
// console.log(c);
// console.log(bArr);

// function equalArrays(a, b) {
//   if (a === b) return true;
//   if (a.length !== b.length) return false;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }
// console.log(equalArrays(aArr, bArr));

// let n = 17;
// let binary = "0b" + n.toString(2);
// let octal = "0o" + n.toString(8);
// let hex = "0x" + n.toString(16);
// console.log(binary);
// console.log(octal);
// console.log(hex);

// let n = 123456.789;
// console.log(n.toFixed(0));
// console.log(n.toFixed(2));
// console.log(n.toFixed(5));
// console.log(n.toExponential(0));
// console.log(n.toExponential(3));
// console.log(n.toExponential(6));
// console.log(n.toPrecision(4));
// console.log(n.toPrecision(7));
// console.log(n.toPrecision(10));

// console.log(parseInt("3 blind mice"));
// console.log(parseInt(" 3.14 meters"));
// console.log(parseInt("-12.34"));
// console.log(parseInt("0xFF"));
// console.log(parseInt("-0xFF"));
// console.log(parseInt("-0xff"));
// console.log(parseInt(".1"));
// console.log(parseInt("0.1"));
// console.log(parseInt("$72.47"));
// console.log(parseFloat("3 blind mice"));
// console.log(parseFloat(" 3.14 meters"));
// console.log(parseFloat("-12.34"));
// console.log(parseFloat("0xFF"));
// console.log(parseFloat("-0xFF"));
// console.log(parseFloat("-0xff"));
// console.log(parseFloat(".1"));
// console.log(parseFloat("0.1"));
// console.log(parseFloat("$72.47"));

// console.log(parseInt("11", 2));
// console.log(parseInt("ff", 16));
// console.log(parseInt("zz", 36));
// console.log(parseInt("077", 8));
// console.log(parseInt("077", 10));
// console.log({ x: 1, y: 2 }.toString());

// let d = new Date(1970, 0, 2);
// console.log(d.valueOf());
// console.log(Number([]));
// console.log(Number([99]));
// console.log(Number([0.3]));

// const dataSet = [1110, 10101, 1001101, 101];
// for (let i = 0; i < dataSet.length; i++) console.log(dataSet[i]);
// for (const datum of dataSet) console.log(datum);
// for (const property in dataSet) console.log(property);

// var x;
// var data = [],
//   count = data.length;
// for (var i = 0; i < count; i++) console.log(data[i]);

// ? destructuring
// let [x, y] = [1, 2];
// [x, y] = [x + 1, y + 1];
// [x, y] = [y, x];
// console.log([x, y]);

// function toPolar(x, y) {
//   return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
// }
// // console.log(toPolar(2, 5));
// let [r, theta] = toPolar(2.0, 2.0);
// console.log(toPolar(r, theta));

// function toCartesian(r, theta) {
//   return [r * Math.cos(theta), r * Math.sin(theta)];
// }
// console.log(toCartesian(5.38, 1.19));

// let [x, y] = toCartesian(r, theta);
// console.log(toCartesian(x, y));

// let o = { x: 1, y: 2 };
// for (const [name, value] of Object.entries(o)) {
//   console.log(name, value);
// }

// let [x, ...y] = [1, 2, 3, 4];
// console.log(x, y);

// let [a, [b, c]] = [1, [2, 2.5], 3];
// console.log(a, b, c);

// let [first, ...rest] = "Hello";
// console.log(first, rest);

// let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
// let { r, g, b } = transparent;
// console.log(transparent);
// console.log({ r, g, b });

// const { sin, cos, tan } = Math;
// console.log({ sin, cos, tan });

// let points = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
// ];

// let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
// console.log(x1, x2, y1, y2);

// let points = { p1: [1, 2], p2: [3, 4] };
// let {
//   p1: [x1, y1],
//   p2: [x2, y2],
// } = points;

// console.log(x1, x2, y1, y2);

// let a;
// let index = 0;
// try {
//   a[index++];
// } catch (e) {
//   index;
// }
// a?.[index++];
// index;
// a[index++];

// function square(x, log) {
//   log?.(x);
//   return x * x;
// }
// console.log(square(5, 6));

// let f = null,
//   x = 0;
// try {
//   f(x++);
// } catch (e) {
//   x;
// }
// console.log(f?.(x++));

// console.log(1 + {});
// console.log(true + true);
// console.log(2 + null);
// console.log(2 + undefined);

// let value = "jsadlfj  asd fsad f234 3 w ";
// console.log(typeof value === "string" ? "'" + value + "'" : value.toString());
// let n = null;
// if (n === 1) console.log("Hello");
// else console.log("Bye");

// let i, j;
// i = j = 1;
// let k = 2;

// if (i === j) {
//   if (j === k) {
//     console.log("i = k");
//   }
// } else {
//   console.log("i != j");
// }

// if (i === j) {
//   if (j === k) {
//     console.log("i = k");
//   } else {
//     console.log("i != k");
//   }
// } else {
//   console.log("i != j");
// }

// function convert(x) {
//   switch (typeof x) {
//     case "number":
//       return x.toString(16);
//     case "string":
//       return '"' + x + '"';
//     default:
//       return String(x);
//   }
// }
// console.log(convert("string"));

// function printArray(a) {
//   let len = a.length,
//     i = 0;
//   if (len === 0) {
//     console.log("Empty");
//   } else {
//     do {
//       console.log(a[i]);
//     } while (++i < len);
//   }
// }
// printArray([]);

// let i,
//   j,
//   sum = 0;
// for (i = 0, j = 5; i < 5; i++, j--) {
//   sum += i * j;
// }
// console.log(sum);

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   sum = 0;
// for (let elem of data) {
//   sum += elem;
// }

// console.log(sum);
// ? iterable objects
// let o = { x: 1, y: 2, z: 3 };
// let keys = "";
// for (let k of Object.keys(o)) {
//   keys += k;
// }

// // for (let elem of o) {
// //   console.log(elem);
// // }
// console.log(keys);

// let sum = 0;
// for (let v of Object.values(o)) {
//   sum += v;
// }
// console.log(sum);

// let pairs = "";
// for (let [k, v] of Object.entries(o)) {
//   pairs += k + v;
// }
// console.log(pairs);
// ! for/of string
// let freq = {};
// for (let letter of "mississippi") {
//   if (freq[letter]) {
//     freq[letter]++;
//   } else {
//     freq[letter] = 1;
//   }
// }
// console.log(freq);
// ! for/of with Set and Map
// let text = "Na na na na na na na na Batman!";
// let worsSet = new Set(text.split(""));
// let unique = [];
// for (let word of worsSet) {
//   unique.push(word);
// }

// console.log(unique);

// let m = new Map([[1, "one"]]);
// for (let [key, value] of m) {
//   console.log(key);
//   console.log(value);
// }

// async function printStream(stream) {
//   for await (let chunk of stream) {
//     console.log(chunk);
//   }
// }
// printStream(text);
// let o = { name: "Saeed", age: 33 };
// for (let p in o) {
//   console.log(o[p]);
// }

// let o = { x: 1, y: 2, z: 3 };
// let a = [],
//   i = 0;
// for (a[i++] in o);
// for (let i in o) console.log(i);

// const obj = {
//   prop1: "value1",
//   prop2: "value2",
// };

// console.log(Object.keys(obj)); // Output: ['prop1', 'prop2']
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (let key in obj) {
//   console.log(key); // Output: 'prop1', 'prop2'
// }
// const obj = {};

// Object.defineProperty(obj, "prop", {
//   value: "value",
//   enumerable: false,
// });

// console.log(obj.prop); // Output: 'value'

// mainloop: while (token !== null) {
//   continue mainloop;
// }

// function getData() {
//   return [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//   ];
// }

// let matrix = getData();
// let sum = 0,
//   success = false;
// computeSum: if (matrix) {
//   for (let x = 0; x < matrix.length; x++) {
//     let row = matrix[x];
//     if (!row) break computeSum;
//     for (let y = 0; y < row.length; y++) {
//       let cell = row[y];
//       if (isNaN(cell)) break computeSum;
//       sum += cell;
//     }
//   }
//   success = true;
// }
// console.log(matrix);

// function displayObject(o) {
//   if (!o) return;
//   console.log("o is a truthy value");
// }
// console.log(displayObject("a"));

// function* range(from, to) {
//   for (let i = from; j <= to; i++) {
//     yield i;
//   }
// }
// console.log(range());
// ? throw Error
// function factorial(x) {
//   if (x < 0) throw new Error("x must not be negative");
//   // debugger;
//   let f;
//   for (f = 1; x > 1; f *= x, x--);
//   return f;
// }
// factorial();
// // console.log(factorial(7));
// // ? try/catch Error
// try {
//   let n = Number(prompt("Please enter a positive integer", ""));
//   let f = factorial(n);
//   alert(n + "! = " + f);
// } catch (ex) {
//   alert(ex);
// }

// let o = { x: 1, y: 2, z: 3 };
// o.propertyIsEnumerable("toString");
// for (let p in o) {
//   console.log(p);
// }
// for (let p in o) {
//   if (!o.hasOwnProperty(p)) continue;
//   console.log(p);
// }
// for (let p in o) {
//   if (typeof o[p] === "function") continue;
//   console.log(p);
// }

// console.log(Object.keys(o));
// console.log(Object.getOwnPropertyNames(o));
// console.log(Object.getOwnPropertySymbols(o));
// console.log(Reflect.ownKeys(o));

// let target = { x: 1 },
//   sources = { y: 2, z: 3 };
// for (let key of Object.keys(source)) {
//   target[key] = source[key];
// }
// console.log(target);

// function merge(target, ...sources) {
//   for (let source of sources) {
//     for (let key of Object.keys(source)) {
//       if (!(key in target)) {
//         target[key] = source[key];
//       }
//     }
//   }
//   return target;
// }
// // console.log(Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));
// console.log(merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }));

// let o = { x: 1, y: { z: [false, null, ""] } };
// let s = JSON.stringify(o);
// let p = JSON.parse(s);
// console.log(o);
// console.log(s);
// console.log(p);

// let point = {
//   x: 1000,
//   y: 2000,
//   toString: function () {
//     return `(${this.x}, ${this.y})`;
//   },
//   toLocaleString: function () {
//     return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
//   },
// };
// console.log(point.toString());
// console.log(point.toLocaleString());

// let point = {
//   x: 3,
//   y: 4,
//   valueOf: function () {
//     return Math.hypot(this.x, this.y);
//   },
// };
// console.log(Number(point));
// ? Computed property names
// let x = 1,
//   y = 2;
// let o = { x, y };
// console.log(o.x + o.y);

// let dynamicAge = "age";
// let person = {
//   name: "Saeed",
//   [dynamicAge]: 33,
// };
// console.log(person.name, person[dynamicAge]);

// const extension = Symbol("my extension symbol");
// let o = {
//   [extension]: {
//     /* extension data stored in this object*/
//   },
// };
// console.log((o[extension].x = 0));
// ? spead operator
// let position = { x: 0, y: 0 };
// let dimensions = { width: 100, height: 75 };
// let rect = { ...position, ...dimensions };
// let rectCirc = rect.x + rect.y + rect.width + rect.height;
// console.log(rectCirc);

// let o = Object.create({ x: 1 });
// let p = { ...o };
// console.log(p.x); //not inherited
// ? shorthand methods
// let square = {
//   area: function () {
//     return this.side * this.side;
//   },
//   side: 10,
// };
// console.log(square.area());
// ! ES6

// let square = {
//   area() {
//     return this.side * this.side;
//   },
//   side: 10,
// };
// console.log(square.area());

// const METHOD_NAME = "m";
// const symbol = Symbol();
// let weirdMethods = {
//   "method with spaces"(x) {
//     return x + 1;
//   },
//   [METHOD_NAME](x) {
//     return x + 2;
//   },
//   [symbol](x) {
//     return x + 3;
//   },
// };
// console.log(weirdMethods["method with spaces"](1));
// console.log(weirdMethods[METHOD_NAME](1));
// console.log(weirdMethods[symbol](1));
// ? accessor properties
// let p = {
//   x: 1.0,
//   y: 1.0,
//   get r() {
//     return Math.hypot(this.x, this.y);
//   },
//   set r(newvalue) {
//     let oldvalue = Math.hypot(this.x, this.y);
//     let ratio = newvalue / oldvalue;
//     this.x *= ratio;
//     this.y *= ratio;
//   },
//   get theta() {
//     return Math.atan2(this.y, this.x);
//   },
// };
// console.log(p.r);
// console.log(p.theta);

// let q = Object.create(p);
// (q.x = 3), (q.y = 4);
// console.log(q.r);
// console.log(q.theta);
// ! sanity checking of property writes and returning different values on each property read
// const serialNum = {
//   _n: 0,
//   get next() {
//     return this._n++;
//   },
//   set next(n) {
//     if (n > this._n) this._n = n;
//     else throw new Error("serial number can only be set to a larger value");
//   },
// };
// console.log((serialNum.next = 10));
// console.log(serialNum.next);
// console.log(serialNum.next);
// console.log(serialNum.next);
// console.log(serialNum.next);
// console.log(serialNum.next);
// console.log(serialNum.next);

// const random = {
//   get octet() {
//     return Math.floor(Math.random() * 256);
//   },
//   get unit16() {
//     return Math.floor(Math.random() * 65536);
//   },
//   get int16() {
//     return Math.floor(Math.random() * 65536) - 32768;
//   },
// };

// console.log(random.octet);
// console.log(random.unit16);
// console.log(random.int16);

// let undefs = [, ,];
// console.log(undefs);

// let a = [1, 2, 3];
// let b = [0, ...a, 4];

// let original = [1, 2, 3];
// let copy = [...original];
// copy[0] = 0;
// original[0];

// let digits = [..."0123456789ABCDEF"];
// console.log(digits);

// let letters = [..."hello world"];
// [...new Set(letters)];

// console.log(letters);

// let a = new Array(10);
// console.log(a);

// let a = new Array(5, 4, 3, 2, 1, "testing, testing");
// console.log(a);

// let a = ["world"];
// let value = a[0];
// a[1] = 3.14;
// let i = 2;
// a[i] = 3;
// a[i + 1] = "Hello";
// a[a[i]] = a[0];

// console.log(a);

// let o = {};
// o[1] = "one";

// console.log(o["1"]);

// let a = new Array(5);
// a = [];
// a[1000] = 0;

// console.log(a);

// let letters = [..."Hello world"];
// let string = "";
// for (let letter of letters) {
//   string += letter;
// }
// console.log(string);

// let everyother = "";
// for (let [index, letter] of letters.entries()) {
//   if (index % 2 === 0) everyother += letter;
// }
// console.log(everyother);

// let uppercase = "";
// letters.forEach((letter) => {
//   uppercase += letter.toUpperCase();
// });
// console.log(uppercase);

// let vowels = "";
// for (let i = 0; i < letters.length; i++) {
//   let letter = letters[i];
//   if (/[aeiou]/.test(letter)) {
//     vowels += letter;
//   }
// }
// console.log(vowels);
// ? multidimensional array
// let table = new Array(10);
// for (let i = 0; i < table.length; i++) {
//   table[i] = new Array(10);
// }
// for (let row = 0; row < table.length; row++) {
//   for (let col = 0; col < table[row].length; col++) {
//     table[row][col] = row * col;
//   }
// }
// console.log(table[5][7]);

// let data = [1, 2, 3, 4, 5],
//   sum = 0;
// data.forEach((value) => {
//   sum += value;
// });
// data.forEach(function (v, i, a) {
//   a[i] = v + 1;
// });

// console.log(sum, data);

// let a = [1, 2, 3];
// console.log(a.map((x) => x * x));

// let a = [5, 4, 3, 2, 1];

// console.log(a.filter((x) => x < 3));

// console.log(a.filter((x, i) => i % 2 === 0));

// let dense = sparse.filter(() => true);
// a = a.filter((x) => x !== undefined && x !== null);

// let a = [1, 2, 3, 4, 5];

// console.log(a.every((x) => x < 10));

// console.log(a.every((x) => x % 2 === 0));

// let a = [1, 2, 3, 4, 5];
// console.log(a.reduce((x, y) => x + y, 0));

// console.log(a.reduce((x, y) => x * y, 1));

// console.log(a.reduce((x, y) => (x > y ? x : y)));

// let a = [1, [2,[3, [4]]]]
// console.log(a.flat(1));
// console.log(a.flat(2));
// console.log(a.flat(3));
// console.log(a.flat(4));
// console.log(a.flat(5));

// let phrases = ["hello world", "the definitive guide"];
// let words = phrases.flatMap((phrase) => phrase.split(" "));
// console.log(words);

// let flat = [-2, -1, 1, 2].flatMap((x) => (x < 0 ? [] : Math.sqrt(x)));

// console.log(flat);

// let a = ["banana", "cherry", "apple"];
// console.log(a.sort());

// let a = [33, 4, 1111, 222];
// console.log(a.sort());
// a.sort(function (a, b) {
//   return a - b;
// });
// console.log(a.sort((a, b) => b - a));
// ? array join
// let a = [1, 2, 3];
// console.log(a.join(" "));

// let b = new Array(10);
// console.log(b.join("-"));

// let a = {};

// let i = 0;
// while (i < 10) {
//   a[i] = i * i;
//   i++;
// }
// a.length = i;

// let total = 0;
// for (let j = 0; j < a.length; j++) {
//   total += a[j];
// }
// console.log(total);

// const sparseArray = [];
// sparseArray[0] = "value1";
// sparseArray[2] = "value2";

// console.log(sparseArray.length); // Output: 3
// console.log(sparseArray); // Output: [ 'value1', <1 empty slot>, 'value2' ]

// for (let element of sparseArray) {
//   console.log(element); // Output: 'value1', 'value2'
// }
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 2, 800);
