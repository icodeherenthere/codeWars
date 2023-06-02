// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

const sumSquareEvenRootOdd = ns => {
  let sum = 0;

  for (let i = 0; i < ns.length; i++) {
    if (ns[i] % 2 === 0) {
      sum += ns[i] ** 2; // Square the even number and add it to the sum
    } else {
      sum += Math.sqrt(ns[i]); // Find the square root of the odd number and add it to the sum
    }
  }

  return Number(sum.toFixed(2));
};