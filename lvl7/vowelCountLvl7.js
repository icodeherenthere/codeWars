// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //   split into single characters
    let allLetters = str.split('')
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    //   match each char to a e i o u
    console.log(allLetters)
    for(let i = 0; i <= allLetters.length; i++){
      if(vowels.includes(allLetters[i])){
          count += 1
      }
      
  
  //   then count thoe vowels 
  //   return answer
    }
    return count
  }