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
// ? jQuery
function debug(msg) {
  var log = $("#debuglog");
  if (log.length == 0) {
    log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
    log.appendTo(document.body);
  }
  log.append($("<pre/>").text(msg));
}
// ?
