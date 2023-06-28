// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
  // your code
  
let numberStr = n.toString();
  if(numberStr.length > 1){
    numberStr = numberStr.replace(/0+$/, '');
    return parseInt(numberStr, 10)
  }else{
    return parseInt(numberStr, 10)
  }
}
