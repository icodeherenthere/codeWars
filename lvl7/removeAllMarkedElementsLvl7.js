// Define a method/function that removes from a given array of integers all the values contained in a second array.




Array.prototype.remove_ = function(integer_list, values_list){
  //your code here
let answer = integer_list.filter(num => !values_list.includes(num))
return answer
}