let interval;
function startClock() {
  interval = setInterval(() => {
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
  }, 1000);
}
function stopClock() {
  clearInterval(interval);
}

function openPage() {
  setTimeout(() => {
    open("/Day3/spam.html", "_blank", "width=600,height=600,top=300,left=300");
  }, 3000);
}
function closePage() {
  window.close();
}

function scroll() {
  setInterval(() => {
    window.scrollBy(0, 100);
  }, 500);
}

function validateEmail(email) {
  let patt1 = /^[A-Za-z0-9._]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,}$/;
  patt1.test(email);
}

function validatePhone(number) {
  let patt1 = /^(010|011|012|015)\d{8}$/;
  patt1.test(number);
}

// function timeToGrad() {
//   countDown = setInterval(() => {
//     let date = new Date();
//     let grad = new Date("24-08-2024");
//     document.getElementById("clock").innerHTML = (grad - date)
//   }, 1000);
// }
