// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


function strCount(str, letter){  
  //code here
  let count = 0;
  
  let word = str.split('')
  console.log(word)
  for(let i = 0; i < word.length; i++){
    if( word[i] === letter){
      count += 1
    }
  }
  return count
}