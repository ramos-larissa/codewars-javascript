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
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let cont = 0;
    let pos = 0;

    while (pos < A.length) {
      if (A[i] == A[pos]) {
        cont += 1;
      }
      pos += 1;
    }
    if (cont % 2 !== 0) {
      return A[i];
    }
  }
}

// Example usage:
console.log(findOdd([1, 2, 3, 2, 1])); // Output: 3

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue
// reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digitalRoot(n) {
  // If n is a single-digit number, return n
  if (n < 10) {
    return n;
  }

  // Sum the digits of n
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  // Recursively calculate the digital root of the sum
  return digitalRoot(sum);
}

// Example usage:
console.log(digitalRoot(16), "digital root"); // Output: 7
