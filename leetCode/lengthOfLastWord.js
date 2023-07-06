// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let newStr = s.trimEnd()
  let x = newStr.split(' ')
  console.log(x.length)
  for(let i = 0; i < x.length; i++){
      let endOf = x[x.length - 1]
      console.log(endOf)
      console.log(newStr.split(' '))
      return endOf.length
  }
};