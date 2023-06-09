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
