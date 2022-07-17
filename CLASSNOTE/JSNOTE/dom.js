let boxEl = document.querySelector(".box");
console.log(boxEl);

boxEl.addEventListener("click", function () {
  //   alert("클릭 클릭 클릭 클릭");
  if (boxEl.classList.contains("orange")) {
    boxEl.classList.remove("orange");
    boxEl.classList.add("skyblue");
  } else {
    boxEl.classList.add("orange");
  }
  boxEl.classList.add("skyblue");
  console.log(boxEl);
});
