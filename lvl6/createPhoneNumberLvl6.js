// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// ARRAYSSTRINGSREGULAR EXPRESSIONSALGORITHMS

function createPhoneNumber(numbers){
  console.log(numbers)
  let first = numbers.slice(0,3).toString("")
  let second = numbers.slice(3,6).toString("")
  let third = numbers.slice(6,10).toString("")
  first = first.split(',').join('')
  second = second.split(',').join('')
  third = third.split(',').join('')
  let result = `(${first})` + ' ' + second + '-' + third
  
  return result
  }
