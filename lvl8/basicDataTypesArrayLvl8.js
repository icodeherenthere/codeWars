// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.


function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr.shift()
}
function getLast(arr){
  //return the last element of arr
  return arr.pop()
}
function pushElement(arr){
  let el=1;
  //push el to arr
  
  return [...arr, el]
 
}
function popElement(arr){
  //pop an element from arr
 let gone = arr.pop()
  return  arr
}