let imageDiv = document.getElementById("image-gallery");
let images = [
  {
    src: "2.jpg",
    width: 100,
    height: 100,
  },
  {
    src: "2.jpg",
    width: 100,
    height: 100,
  },
  {
    src: "2.jpg",
    width: 100,
    height: 100,
  },
];

function opacityOne(target) {
  target.style.opacity = "1";
}

function opacitySmall(target) {
  target.style.opacity = "0.3";
}

images.forEach((imageData) => {
  let imgElement = document.createElement("img");
  imgElement.src = imageData.src;
  imgElement.width = imageData.width;
  imgElement.height = imageData.height;
  imgElement.onmouseleave = function () {
    opacityOne(this);
  };
  // there is no THIS in Arrow functions
  imgElement.onmouseover = () => {
    opacitySmall(imgElement);
  };
  imageDiv.appendChild(imgElement);
});

//question 2
let colors = ["blue", "red", "green", "yellow", "black", "white", "purple"];

function randomColor() {
  const colorSpans = document.querySelectorAll(".color-span");
  colorSpans.forEach((span) => {
    let textColor = colors[Math.floor(Math.random() * colors.length)];
    let bgColor = colors[Math.floor(Math.random() * colors.length)];

    span.style.color = textColor;
    span.style.backgroundColor = bgColor;
  });
}

let spanDiv = document.getElementById("spans");
for (let i = 0; i < 4; i++) {
  let spanElement = document.createElement("span");
  spanElement.className = "color-span";
  let text = document.createTextNode(`Hello IAM span number ${i}\n`);
  spanElement.appendChild(text);
  spanDiv.appendChild(spanElement);
}

let passField = document.createElement("input");
passField.setAttribute("type", "password");

let passDiv = document.getElementById("inputs");
passDiv.appendChild(passField);

function toggleInput() {
  passField.getAttribute("type") == "password"
    ? passField.setAttribute("type", "text")
    : passField.setAttribute("type", "password");
}

let questions = [
  "question one",
  "question two",
  "question three",
  "question four",
  "question five",
  "question six",
  "question seven",
  "question eight",
  "question nine",
  "question ten",
];

let currentQuestionIndex = 0;
let questionDiv = document.getElementById("question-div");
let questionP = document.createElement("p");

//start with the first question by default
questionP.textContent = questions[0];
questionDiv.appendChild(questionP);

function currentQuestion(index) {
  questionP.textContent = questions[index];
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
  }
  currentQuestion(currentQuestionIndex);
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
  }
  currentQuestion(currentQuestionIndex);
}

let pDiv = document.getElementById("p-div");
for (let i = 1; i < 4; i++) {
  let pElement = document.createElement("p");
  pElement.className = "color-p";
  let text = document.createTextNode(`Hello IAM p number ${i}\n`);
  pElement.appendChild(text);
  pDiv.appendChild(pElement);
}

const colorPs = document.querySelectorAll(".color-p");
colorPs.forEach((p) => {
  let textColor = colors[Math.floor(Math.random() * colors.length)];
  let bgColor = colors[Math.floor(Math.random() * colors.length)];

  p.style.color = textColor;
  p.style.backgroundColor = bgColor;
});

let formName = document.getElementById("fullName");
let fullNameError = document.getElementById("fullNameError");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeatPassword");
let passwordError = document.getElementById("passwordError");

formName.addEventListener("focus", () => {
  formName.style.border = "solid 1px blue";
});

formName.addEventListener("blur", () => {
  formName.style.border = "none";
  if (formName.value.length <= 3) {
    fullNameError.style.display = "inline";
    formName.style.backgroundColor = "gray";
    formName.focus();
    formName.select();
  } else {
    fullNameError.style.display = "none";
    formName.style.backgroundColor = "white";
  }
});

repeatPassword.addEventListener("blur", () => {
  if (password.value != repeatPassword.value) {
    passwordError.style.display = "inline";
    repeatPassword.style.backgroundColor = "gray";
  } else {
    passwordError.style.display = "none";
    repeatPassword.style.backgroundColor = "white";
  }
});
//•	But for the other custom validation of the name and password & repeat password, will not prevent the form for submitting and you can submit the form even if they’re not valid, why?
//because the html already makes the email verification built in
//but i knows nothing about my other fields or how i manage them

let submitError = document.getElementById("submitError");

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    if (
      fullNameError.style.display === "inline" ||
      passwordError.style.display === "inline"
    ) {
      submitError.style.display = "inline";
      event.preventDefault();
    }
  });
