"use strict";

// ? promises
// const urls = [];

// promises = urls.map((url) => fetch(url).then((r) => r.text()));

// Promise.all(promises)
//   .then((bodies) => {})
//   .catch((e) => console.error(e));
// !
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// const promises = urls.map((url) => fetch(url).then((r) => r.json()));

// Promise.all(promises)
//   .then((posts) => {
//     // Create a new div element
//     const div = document.createElement("div");

//     // Iterate over the fetched posts and append them as text nodes to the div element
//     posts.forEach((post) => {
//       const textNode = document.createTextNode(JSON.stringify(post));
//       div.appendChild(textNode);
//     });

//     // Append the div element to the body of the document
//     document.body.appendChild(div);
//   })
//   .catch((e) => console.error(e));
// !
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// const promises = urls.map((url) => fetch(url).then((r) => r.text()));

// Promise.all(promises)
//   .then((bodies) => {
//     // Create a new div element
//     const div = document.createElement("div");

//     // Iterate over the fetched bodies and append them as text nodes to the div element
//     bodies.forEach((body) => {
//       const textNode = document.createTextNode(body);
//       div.appendChild(textNode);
//     });

//     // Append the div element to the body of the document
//     document.body.appendChild(div);
//   })
//   .catch((e) => console.error(e));

// ? asynchronous

// function elapseTime(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function* clock(interval, max = Infinity) {
//   for (let count = 1; count <= max; count++) {
//     await elapseTime(interval);
//     yield count;
//   }
// }
// async function test() {
//   for await (let tick of clock(300, 100)) {
//     console.log(tick);
//   }
// }
// test();
// !
// function clock(interval, max = Infinity) {
//   function until(time) {
//     return new promise((resolve) => setTimeout(resolve, time - Date.now()));
//   }
//   return {
//     startTime: Date.now(),
//     count: 1,
//     async next() {
//       if (this.count > max) {
//         return { done: true };
//       }
//       let targetTime = this.startTime + this.count * interval;
//       await until(targetTime);
//       return { value: this.count++ };
//     },
//     [Symbol.asyncIterator]() {
//       return this;
//     },
//   };
// }

// ? metaprogramming

// console.log(Object.getOwnPropertyDescriptor({ x: 1 }, "x"));
// const random = {
//   get octet() {
//     return Math.floor(Math.random() * 256);
//   },
// };

// console.log(Object.getOwnPropertyDescriptor(random, "octet"));
// console.log(Object.getOwnPropertyDescriptor({}, "x"));
// console.log(Object.getOwnPropertyDescriptor({}, "toString"));

// let o = {};

// Object.defineProperty(o, "x", {
//   value: 1,
//   writable: true,
//   enumerable: false,
//   configurable: true,
// });

// console.log(o.x);

// console.log(Object.keys(o));

// console.log(Object.defineProperty(o, "x", { writable: false }));

// console.log(Object.defineProperty(o, "x", { value: 2 }));

// console.log(Object.getPrototypeOf({}));
// console.log(Object.getPrototypeOf([]));
// console.log(Object.getPrototypeOf(() => {}));

// // console.log(Reflect.getPrototypeOf());

// let o = { x: 1 };
// let p = { y: 2 };
// Object.setPrototypeOf(o, p);
// console.log(o.y);

// let a = [1, 2, 3];
// Object.setPrototypeOf(a, p);
// console.log(a.join);

// let p = { z: 3 };

// let o = {
//   x: 1,
//   y: 2,
//   __proto__: p,
// };
// console.log(o.z);

// let uint8 = {
//   [Symbol.hasInstance](x) {
//     return Number.isInteger(x) && x >= 0 && x <= 255;
//   },
// };
// console.log(128 instanceof uint8);
// console.log(256 instanceof uint8);

// console.log({}.toString());

// console.log(Object.prototype.toString.call([]));
// console.log(Object.prototype.toString.call(/./));
// console.log(Object.prototype.toString.call(() => {}));
// console.log(Object.prototype.toString.call(""));
// console.log(Object.prototype.toString.call(0));
// console.log(Object.prototype.toString.call(false));

// function classof(o) {
//   return Object.prototype.toString.call(o).slice(8, -1);
// }

// console.log(classof(null));
// console.log(classof(undefined));
// console.log(classof(1));
// console.log(classof(10n ** 100n));
// console.log(classof(""));
// console.log(classof(false));
// console.log(classof(Symbol()));
// console.log(classof({}));
// console.log(classof([]));
// console.log(classof(/./));
// console.log(classof(() => {}));
// console.log(classof(new Map()));
// console.log(classof(new Set()));
// console.log(classof(new Date()));

// class Range {
//   get [Symbol.toStringTag]() {
//     return "Range";
//   }
// }
// let r = new Range(1, 10);
// console.log(Object.prototype.toString.call(r));
// console.log(classof(r));

// class EZArray extends Array {
//   get first() {
//     return this[0];
//   }
//   get last() {
//     return this[this.length - 1];
//   }
// }
// let e = new EZArray(1, 2, 3);
// let f = e.map((x) => x * x);
// console.log(e.first);
// console.log(e.last);
// console.log(f.first);
// console.log(f.last);

// Array[Symbol.species] = Array;

// class EZArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
//   get first() {
//     return this[0];
//   }
//   get last() {
//     return this[this.length - 1];
//   }
// }
// let e = new EZArray(1, 2, 3);
// let f = e.map((x) => x - 1);
// console.log(e.last);
// console.log(f.last);

// let arraylike = {
//   length: 1,
//   0: 1,
//   [Symbol.isConcatSpreadable]: true,
// };
// console.log([].concat(arraylike));

// class NonSpreadableArray extends Array {
//   get [Symbol.isConcatSpreadable]() {
//     return false;
//   }
// }
// let a = new NonSpreadableArray(1, 2, 3);
// console.log([].concat(a).length);

// function plus1(x) {
//   return x + 1;
// }
// let square = function (x) {
//   return x * x;
// };

// console.log(square(plus1(5)));
