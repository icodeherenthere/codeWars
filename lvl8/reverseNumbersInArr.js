// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = n.toString()
  let answer = arr.split('').reverse().map(Number);  
  return answer
  }