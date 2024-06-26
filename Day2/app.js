const tips = [
  "tip 1",
  "tip 2",
  "tip 3",
  "tip 4",
  "tip 5",
  "tip 6",
  "tip 7",
  "tip 8",
  "tip 9",
  "tip 10",
];

function showRandom() {
  return tips[Math.floor(Math.random() * 10)];
}

function showDate() {
  let d1 = new Date();
  console.log(d1.toLocaleDateString());
}

try {
  let isValid = confirm("is this valid");
  if (isValid) {
    console.log(isValid);
  } else {
    throw error;
  }
} catch (error) {
  console.error("Error its not valid");
}

function validateDate(date) {
  console.log(date);
  if (date.length == 10 && date[2] == "-" && date[5] == "-") {
    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6, 10);
    return new Date(year, month, day);
  } else {
    console.error("WRONGE FORMATE");
  }
}

let today = prompt(
  "enter the date for today in following formate (DD – MM – YYYY) ex. 22–01–1999"
);
validateDate(today);

function formArray(promptData) {
  let array = new Array();
  for (let i = 0; i < promptData.length; i++) {
    const element = promptData[i];
    if (element == "[" || element == "]" || element == ",") {
      continue;
    } else if (element == "-") {
      let negValue = Number(element + promptData[i + 1]);
      array.push(negValue);
      i++;

      continue;
    }
    let arrayElement = isNaN(element) ? element : Number(element);
    array.push(arrayElement);
  }
  return array;
}

let array = prompt("enter array of numbers");
let n = prompt("enter the number to be counted");

let numberArray = formArray(array);

function countNumber(array, n) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}
countNumber(numberArray, n);

let chArray = prompt("enter array of Charcters");
let ch = prompt("enter the charcter to be removed");

let readyCharArray = formArray(chArray);

function removeChar(array, ch) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === ch) {
      array.splice(i, 1);
    }
  }
  console.log(array);
  return array;
}
removeChar(readyCharArray, ch);

let maxArray = prompt("enter array of numbers");
let maxNumberArray = formArray(maxArray);

function findMax(nums) {
  let maxNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    maxNum < nums[i] ? (maxNum = nums[i]) : "";
  }
  console.log(maxNum);
  return maxNum;
}
findMax(maxNumberArray);
