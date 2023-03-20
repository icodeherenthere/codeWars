// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  // Code?
  if(num * -1 === -num){
    return num = (-num)
  }if(num === 0){
    return num = '0'
  }else{
    return num = 'num'
  }
}