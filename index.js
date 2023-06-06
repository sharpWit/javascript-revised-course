// ? absolute
// function abs(x) {
//   if (x >= 0) {
//     return x;
//   } else {
//     return -x;
//   }
// }
// console.log(abs(-1));
// ? factorial
// function factorial(n) {
//   var product = 1;
//   while (n > 1) {
//     product *= n;
//     n--;
//   }
//   return product;
// }
// console.log(factorial(4));
//! another way
// function factorial2(n) {
//   var i,
//     product = 1;
//   for (i = 2; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }
// console.log(factorial2(5));
// ? 2D geomatric
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// var p = new Point(1, 1);
// Point.prototype.r = function () {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// };
// console.log(p.r());
// ? client-side
// function moveon() {
//   var answer = confirm("Ready to move on?");
//   if (answer) window.location = "http://google.com";
// }
// setTimeout(moveon, 5000);
// ? Create an element
// function debug(msg) {
//   var log = document.getElementById("debuglog");
//   if (!log) {
//     var log = document.createElement("div");
//     log.id = "debuglog";
//     log.innerHTML = "<h1> Debug Log </h1>";
//     document.body.appendChild(log);
//   }
//   var pre = document.createElement("pre");
//   var text = document.createTextNode(msg);
//   pre.appendChild(text);
//   log.appendChild(pre);
// }
// debug("This is a 'pre' debugLog");
// ? hide element
// function hide(e, reflow) {
//   if (reflow) {
//     e.style.display = "none";
//   } else {
//     e.style.visibility = "hidden";
//   }
// }

// function highlight(e) {
//   if (!e.className) e.className = "hilite";
//   else e.className += "hilite";
// }
// ? hide images element
// window.onload = function () {
//   var images = document.getElementsByTagName("img");
//   for (var i = 0; i < images.length; i++) {
//     var image = images[i];
//     if (image.addEventListener) image.addEventListener("click", hide, false);
//     else image.attachEvent("onclick", hide);
//   }
//   function hide(event) {
//     event.target.style.visibility = "hidden";
//   }
// };
// ? date
// var then = new Date(2010, 0, 1);
// var later = new Date(2010, 0, 1, 1, 2, 1);
// var now = new Date();
// var elapsed = now - then;
// console.log(elapsed);
// console.log(later.getFullYear());
// console.log(later.getMonth());
// console.log(later.getDate());
// console.log(later.getDay());
// console.log(later.getHours());
// console.log(later.getUTCHours());
// console.log(later.toString());
// console.log(later.toUTCString());
// console.log(later.toLocaleDateString());
// console.log(later.toLocaleTimeString());
// console.log(later.toISOString());
// ? strings
// var s = "Hello, world";
// console.log(
//   s.charAt(0),
//   s.charAt(s.length - 1),
//   s.substring(1, 4),
//   s.slice(-3),
//   s.slice(1, 4),
//   s.indexOf("1"),
//   s.lastIndexOf("1"),
//   s.indexOf("1", 3),
//   s.split(","),
//   s.replace("h", "H"),
//   s.toUpperCase()
// );
// ? RegExps
// var text = "testing: 1, 2, 3";
// var pattern = /\d+/g;
// console.log(pattern.test(text));
// console.log(text.search(pattern));
// console.log(text.match(pattern));
// console.log(text.replace(pattern, "#"));
// console.log(text.split(/\D+/));
// ? string methods
// var s = "hello world!";
// var word = s.substring(s.indexOf("") + 1, s.length);
// console.log(word);
// ? object and array equality
// var a = ["a", "b", "c"];
// var b = [];
// for (var i = 0; i < a.length; i++) {
//   b[i] = a[i];
// }
// function equalArrays(a, b) {
//   if (a.length != b.length) return false;
//   for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
//   return true;
// }
// ?
// var n = 17;
// console.log((binary_string = n.toString(2)));
// console.log((octal_string = "0" + n.toString(8)));
// console.log((hex_string = "0x" + n.toString(16)));
// ?
// var n = 123456.789;
// console.log(n.toFixed(0));
// console.log(n.toFixed(2));
// console.log(n.toFixed(5));
// console.log(n.toExponential(1));
// console.log(n.toExponential(3));
// console.log(n.toPrecision(4));
// console.log(n.toPrecision(7));
// console.log(n.toPrecision(10));
// ?
// var scope = "global";
// function checkScope() {
//   var scope = "local";
//   return scope;
// }
// console.log(checkScope());

// scope = "global";
// function checkScope2() {
//   scope = "local";
//   myScope = "local";
//   return [scope, myScope];
// }
// console.log(checkScope2());
// console.log(scope);
// console.log(myScope);

// var scope = "global scope";
// function checkScope() {
//   var scope = "local scope";
//   function nested() {
//     var scope = "nested scope";
//     return scope;
//   }
//   return nested();
// }
// console.log(checkScope());
// ?
function test(o) {
  var i = 0;
  if (typeof o == "object") {
    var j = 0;
    for (var k = 0; k < 10; k++) {
      console.log(k);
    }
    console.log(k);
  }
  console.log(j);
}
console.log(test());
