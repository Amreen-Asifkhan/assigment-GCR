// =====ARROW FUNCTION======
// ===========Q 1=========
// SQUARE OF NUMBERS
const squareNumbers = (arr) => arr.forEach((num, i) => (arr[i] = num ** 2));
const number = [2, 5, 7, 8, 20, 10];
squareNumbers(number);
console.log(number);
// // ===========Q 2=========
//SUM OF ARRAY
const add = [23, 5, 89, 20, 10];
console.log(add.reduce((a, b) => a + b)); //add all element
// =======Q 3=====
// FILTER EVEN NUMBER

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// =======STRING=====
// ==========Q4=======
//reverse a string
var string = prompt("please enter a string");
var strLen = string.length;
var revStr = "";
for (var i = strLen - 1; i >= 0; i--) {
  revStr += string[i];
}

console.log(`${string} reverse is ${revStr}`);

// ========Q5=======
// CHECK VOWELS
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char == "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVowels("amreen asif khan");
// =======Q6======
// CHECK PALINDROME
var string = prompt("Please enter astring");
var len = string.length;
var msg = "It is not  a palindrome";
for (var i = 0; i < len / 2; i++) {
  if (string[i] != string[len - 1 - i]);
  {
    msg = "It is  a palindrome";
  }
}
console.log(`${string}:${msg}`);

// ========ARRAY======
//    ===========Q7=======
// FIND Maximum Number
var myArray = [80, 50, 40, 57, 29, 23, 100, 300];
myArray.sort();
console.log("maximum" + myArray[myArray.length - 5]);

// ========Q8=======
// REMOVE DUPLICATE
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 10, 40]));

// ========Q9====
// ======MERGE ARRAY=======

function mergeArrayAndRemoveDuplicates(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2]; //array ko spread karta h
  //      console.log(mergedArray)
  let result = [...new Set(mergedArray)]; //set:ONLY TAKE UNIQUE ELEMENT
  console.log(result);
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 4, 5, 6, 7];
mergeArrayAndRemoveDuplicates(arr1, arr2);

// ======FOR LOOP======
// ==========Q 10======
// FACTORIAL CALCULATION
var num = prompt("please enter a number");
var fact = 1;
if (num == 0) {
  console.log(`The factorial of ${num} is 1`);
} else if (num < 0) {
  console.log(`The factorial of ${num} is -ve numbers is not possible`);
} else {
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(`The factorial of ${num} is ${fact}`);
}

// ======WHILE LOOP=======
// ========Q 12======
// sum of digit
let numb = 123456;
let sum = 0;
while (numb > 0) {
  let reminder = numb % 10; //3
  sum = sum + reminder;
  numb = Math.floor(numb / 10); //12.3  math.floor: remove point value
}
console.log(sum);

// ======DO WHILE LOOP=======
// ========Q 14======
// PRINT NUMBERS 1 TO 20
var j = 1;
do {
  console.log(j);
  j++;
} while (j <= 20);

// =======CHALLENGE======
//    SORTING WORDS
var string = prompt("please enter a string");
var stringArray = string.split(" ");
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(" "));
