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
// ?
window.onload = function () {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    if (image.addEventListener) image.addEventListener("click", hide, false);
    else image.attachEvent("onclick", hide);
  }
  function hide(event) {
    event.target.style.visibility = "hidden";
  }
};
