//1.Write a function that takes a string and returns it reversed.
const reversedStr = (str) => {
  const reversed = str.split("").reverse().join("");
  return reversed;
};

console.log(reversedStr("hello"));

//2. Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const makeVowelsStr = (str) => {
  const voewlsList = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (voewlsList.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log(makeVowelsStr("mango"));

//3. Write a function that checks if a string is a palindrome (reads the same forward and backward).

const palindromeCheck = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

//console.log(palindromeCheck("madam"));

//4.Write a function that takes an array of numbers and returns the largest number.

const largestNum = (arr) => {
  return Math.max(...arr);
};

//console.log(largestNum([1, 5, 3, 9, 2, 100]));

//5 Write a function that removes all duplicate numbers from an array.

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

//console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//6.Write a function that returns the sum of all numbers in an array.

const sumOfArray = (arr) => {
  let totlal = 0;

  for (let num of arr) {
    totlal += num;
  }

  return totlal;
};

//7 Write a function that returns all even numbers from a given array.

const evenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

//8 Write a function that capitalizes the first letter of each word in a string.

const capitalizesFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// 9.Write a function that calculates the factorial of a number using a loop.

function calculatesFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

//10 Write a function that prints numbers from 1 to 20.
function pingPongChallenge() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

//pingPongChallenge();
