"use strict";

// ? loading script on demand
// function importScript(url) {
//   return new Promise((resolve, reject) => {
//     let s = document.createElement("script");
//     s.onload = () => {
//       resolve();
//     };
//     s.onerror = (e) => {
//       reject(e);
//     };
//     s.src = url;
//     document.body.append(s);
//   });
// }
// importScript("./components/clock/main.js");

// let body = document.querySelector("body");
// let para = document.createElement("p");
// let emp = document.createElement("em");
// body.appendChild(para);
// emp.append("World");
// para.append("Hello ", emp, "!");
// para.prepend("!");
// para.innerHTML;

// let greeting = document.querySelector("h1.greeting");

// greeting.append(para);
// greeting.append(para, document.createElement("hr"));

// greeting.after(para.cloneNode(true));

// greeting.replaceWith(para);

// para.remove();

// ? Generating a table of content with the DOM API

// document.addEventListener("DOMContentLoaded", () => {
//   let toc = document.querySelector("#TOC");
//   if (!toc) {
//     toc = document.createElement("div");
//     toc.id = "TOC";
//     document.body.prepend(toc);
//   }

//   let headings = document.querySelectorAll("h2,h3,h4,h5,h6");

//   let sectionNumbers = [0, 0, 0, 0, 0];

//   for (let heading of headings) {
//     if (heading.parentNode === toc) {
//       continue;
//     }

//     let level = parseInt(heading.tagName.charAt(1)) - 1;

//     sectionNumbers[level - 1]++;
//     for (let i = level; i < sectionNumbers.length; i++) {
//       sectionNumbers[i] = 0;
//     }

//     let sectionNumber = sectionNumbers.slice(0, level).join(".");
//     let span = document.createElement("span");
//     span.className = "TOCSectNum";
//     span.textContent = sectionNumber;
//     heading.prepend(span);

//     let anchor = document.createElement("a");
//     let fragmentName = `TOC${sectionNumber}`;
//     anchor.name = fragmentName;
//     heading.before(anchor);
//     anchor.append(heading);

//     let link = document.createElement("a");
//     link.href = `#${fragmentName}`;

//     link.innerHTML = heading.innerHTML;

//     let entry = document.createElement("div");
//     entry.classList.add("TOCEntry", `TOCLevel${level}`);
//     entry.append(link);
//     toc.append(entry);
//   }
// });

// ? tooltip

// document.querySelector("#tooltip").classList.remove("hidden");
// document.querySelector("#tooltip").classList.add("hidden");
// !
// let tooltip = document.querySelector("#tooltip");
// function displayTt(tooltip, x, y) {
//   tooltip.style.display = "block";
//   tooltip.style.position = "absolute";
//   tooltip.style.left = `${x}px`;
//   tooltip.style.top = `${y}px`;
// }

// displayTt(tooltip, 10, 20);

// let title = document.querySelector("#section1title");
// let styles = window.getComputedStyle(title);
// let beforeStyles = window.getComputedStyle(title, "::before");
// console.log(beforeStyles);

// ? toggleTheme

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   let theme = document.querySelector(".light-theme");
//   theme.classList.toggle("dark-theme");
// });

// document.querySelector("#subscribe").classList.add("transparent");
