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
