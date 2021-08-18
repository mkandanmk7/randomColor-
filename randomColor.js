let colorHex = document.querySelector("#colorCode");
let button = document.querySelector("#btn");
let codeDigit = "0123456789ABCDEF";
let colors = "";

button.addEventListener("click",  () =>{
  for (let i = 0; i < 6; i++) {
    colors += codeDigit[Math.floor(Math.random() * 16)];
  }
  colorHex.innerHTML = "#" + colors;
  document.body.style.background = "#" + colors;
  colors = "";
});
