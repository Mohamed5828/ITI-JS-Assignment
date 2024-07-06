let passwordEle = document.getElementById("password");
let emailEle = document.getElementById("email");
let rememberEle = document.getElementById("terms");
let ajaxEle = document.getElementById("ajax");

emailEle.value = JSON.parse(localStorage.getItem("credentials")).email || "";
passwordEle.value =
  JSON.parse(localStorage.getItem("credentials")).password || "";

function saveToLocal() {
  let credentials = {
    email: emailEle.value,
    password: passwordEle.value,
  };
  localStorage.setItem("credentials", JSON.stringify(credentials));
}

function deleteFromLocal() {
  localStorage.removeItem("credentials");
}

//in local
//data is saved forever untill i delete it manually
//data is shared accross all the tabs if i opened the same site

//Session
//data is stored only for the duration the page is opened
//data not shared for all tabs for the same site
//local storage data can be accessed from another tabs but session not

//yes json can hold null and boolean
//json is readable newer and formed by key-value pairs fast parsing
//xml is older hard to read "nested objects" can carry attrbuites and can be data validated slow parsing
function onSubmit() {
  rememberEle.checked ? saveToLocal() : deleteFromLocal();
}

let students = [
  {
    ID: 1,
    name: "mohamed",
    age: 25,
    address: "cairo",
    skills: ["JavaScript", "Java", "React"],
    isLeader: true,
  },
  {
    ID: 2,
    name: "ahmed",
    age: 25,
    address: "alexandria",
    skills: ["Java", "pthon"],
    isLeader: false,
  },
  {
    ID: 3,
    name: "ali",
    age: 27,
    address: null,
    skills: ["springboot", "angular"],
    isLeader: false,
  },
];

students.map((student) => {
  for (let i = 0; i < student.skills.length; i++) {
    console.log(student.skills[i]);
  }
});

function loadData(id, element) {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let data = JSON.parse(this.responseText);
      let firstName = document.createElement("p");
      let lastName = document.createElement("p");
      let avatar = document.createElement("img");
      firstName.innerText = data.data.first_name;
      lastName.innerText = data.data.last_name;
      avatar.src = data.data.avatar;
      element.appendChild(firstName);
      element.appendChild(lastName);
      element.appendChild(avatar);
    }
  };
  xhttp.open("GET", `https://reqres.in/api/users/${id}`, true);
  xhttp.send();
}

function loadFullData() {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let data = JSON.parse(this.responseText);
      dropDown(data.data);
    }
  };
  xhttp.open("GET", `https://reqres.in/api/users`, true);
  xhttp.send();
}

loadData(1, ajaxEle);

let userEle = document.getElementById("userDisplay");
let textbox = document.createElement("input");
let btn = document.createElement("input");
textbox.setAttribute("type", "text");
btn.setAttribute("type", "submit");
btn.addEventListener("click", () => {
  loadData(textbox.value, userEle);
  //   console.log(textbox.value);
});
textbox.setAttribute("placeholder", "enter user ID");
userEle.appendChild(textbox);
userEle.appendChild(btn);

let selectUserEle = document.getElementById("selectUser");

function dropDown(users) {
  let dropdownEle = document.getElementById("usersDropdown");
  let selectEle = document.createElement("select");
  users.forEach((user) => {
    let option = document.createElement("option");
    option.textContent = `${user.first_name} ${user.last_name}`;
    selectEle.appendChild(option);
  });
  selectEle.addEventListener("change", function () {
    loadData(this.selectedIndex + 1, selectUserEle);
  });
  dropdownEle.appendChild(selectEle);
}

loadFullData();

// let name = prompt("enter name");
// let emailAdd = prompt("enter email");
let patt1 = /^[A-Za-z]{3,}(?: [A-Za-z])*$/;
let patt2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com|net|edu|org)\.eg$/;

// if (!patt1.test(name)) {
//   alert("Invalid name");
// } else if (!patt2.test(email)) {
//   alert("Invalid email.");
// } else {
//   alert("Valid input!");
// }
