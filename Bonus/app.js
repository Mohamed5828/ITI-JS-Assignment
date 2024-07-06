// function validateDateFormat(dateString) {
//   if (
//     dateString.length !== 10 ||
//     dateString[2] !== "-" ||
//     dateString[5] !== "-"
//   ) {
//     throw new Error("Wrong Date Format");
//   }

//   const day = parseInt(dateString.slice(0, 2), 10);
//   const month = parseInt(dateString.slice(3, 5), 10) - 1;
//   const year = parseInt(dateString.slice(6, 10), 10);

//   const dateObject = new Date(year, month, day);

//   if (
//     dateObject.getFullYear() !== year ||
//     dateObject.getMonth() !== month ||
//     dateObject.getDate() !== day
//   ) {
//     throw new Error("Invalid Date");
//   }

//   return dateObject;
// }

// function showDate() {
//   const dateInput = document.getElementById("dateInput").value;

//   try {
//     const dateObject = validateDateFormat(dateInput);
//     alert(`The date you entered is: ${dateObject.toDateString()}`);
//   } catch (error) {
//     alert(error.message);
//   }
// }

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

function partition(nums, low, high) {
  let pivot = nums[high];
  let i = low - 1;
  for (let j = low; j < high - 1; j++) {
    if (nums[j] < pivot) {
      i++;
      swap(nums, i, j);
    }
  }
  return i + 1;
}

function quicksort(nums, low, high) {
  let p = partition(nums, low, high);
  quicksort(nums, low, p - 1);
  quicksort(nums, p + 1, high);
}

let arr = [10, 7, 8, 9, 1, 5];
let N = arr.length;

// Function call
quicksort(arr, 0, N - 1);
console.log("Sorted array:");
console.log(arr.join(" "));
