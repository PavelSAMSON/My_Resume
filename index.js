const btn1 = document.querySelectorAll(".btn1");

document.querySelectorAll(".accordion").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// let content = document.querySelector(".content");

// document.querySelectorAll(".btn1").forEach((el) => {
//   el.addEventListener("click", () => {
//     if (content.classList.toggle("maxHeidht")) {
//       el.textContent = "^";
//     } else {
//       el.textContent = "☟";
//     }
//   });
// });
