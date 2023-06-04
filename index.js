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
// ?
