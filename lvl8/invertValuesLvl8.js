// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


function invert(array) {
  let answer = []
 for(let i = 0; i < array.length; i++){
   let result = array[i] *= -1;
     console.log(answer.push(result))
 } 
 return answer;
}
