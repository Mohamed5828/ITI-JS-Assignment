function greeting() {
  alert("Welcome to my site!");
  const name = prompt("enter your name: ");
  document.getElementById("greetings").innerHTML = `<p> Welcome, ${name}!</p>`;
}
// greeting();

function sum(x, y) {
  return x + y;
}
function initSum() {
  const x = prompt("enter first number: ");
  const y = prompt("enter second number: ");
  const result = sum(parseInt(x), parseInt(y));
  document.getElementById(
    "sum"
  ).innerHTML = `<p> The Sum of the two numbers is: ${result}</p>`;
}

function solve(exp) {
  return eval(exp);
}

function initSolve() {
  const exp = prompt("enter a math expression (Ex. 3+4*5/10*8)");
  const result = solve(exp);
  document.getElementById(
    "expression"
  ).innerHTML = `<p> You entered: ${exp}, and the result is: ${result}</p>`;
}

function countA(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A" || s[i] == "a") {
      counter++;
    }
  }
  return counter;
}

function initCount() {
  const str = prompt("enter a string to count A's");
  const result = countA(str);
  document.getElementById(
    "count-a"
  ).innerHTML = `<p> Your string contains: ${result} A's</p>`;
}

function substring(str, word) {
  return str.indexOf(word);
}

function initSubstring() {
  const str = prompt("enter a string to search in it");
  const word = prompt("enter a word to search for");
  const result = substring(str, word);
  document.getElementById("substring").innerHTML =
    result !== -1
      ? `<p> Your string contains the word <strong> ${word} </strong> in the position ${result} </p>`
      : `<p> Your string <strong> Doesn't </strong> contain ${word} </p>`;
}

function convertTemp(temp) {
  return (temp / 5) * 9 + 32;
}

function initTemp() {
  const temp = prompt("enter a temperature  in Celsius");
  const result = convertTemp(parseInt(temp));
  document.getElementById(
    "temp"
  ).innerHTML = `<p> the temperature in Fahrenheit:  ${result}</p>`;
}
