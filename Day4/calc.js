let input = document.getElementById("input");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnDivide = document.getElementById("btnDivide");
let btnMultiply = document.getElementById("btnMultiply");
let btnMinus = document.getElementById("btnMinus");
let btnPlus = document.getElementById("btnPlus");
let btnEquals = document.getElementById("btnEquals");
let btnDot = document.getElementById("btnDot");
let btnClear = document.getElementById("btnClear");

function appendValue(value) {
  input.innerText += value;
}

btn1.addEventListener("click", () => appendValue("1"));
btn2.addEventListener("click", () => appendValue("2"));
btn3.addEventListener("click", () => appendValue("3"));
btn4.addEventListener("click", () => appendValue("4"));
btn5.addEventListener("click", () => appendValue("5"));
btn6.addEventListener("click", () => appendValue("6"));
btn7.addEventListener("click", () => appendValue("7"));
btn8.addEventListener("click", () => appendValue("8"));
btn9.addEventListener("click", () => appendValue("9"));
btn0.addEventListener("click", () => appendValue("0"));
btnDot.addEventListener("click", () => appendValue("."));
btnDivide.addEventListener("click", () => appendValue("/"));
btnMultiply.addEventListener("click", () => appendValue("*"));
btnMinus.addEventListener("click", () => appendValue("-"));
btnPlus.addEventListener("click", () => appendValue("+"));

btnClear.addEventListener("click", () => {
  input.innerText = "";
});

btnEquals.addEventListener("click", () => {
  try {
    input.innerText = eval(input.innerText);
  } catch (error) {
    input.innerText = "Error";
  }
});
