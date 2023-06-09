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
let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + b * b); // The Pythagorean theorem
};
console.log(points.dist());
