// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
function spinWords(string) {
  const words = string.split(" ");

  const reversedWords = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });

  return reversedWords.join(" ");
}

spinWords("Hey fellow warriors"); // "Hey wollef sroirraw"

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(numbers) {
  let obj = {};
  numbers.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

// Example usage:
console.log(findOdd([1, 2, 3, 2, 1])); // Output: 3
