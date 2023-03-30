// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  //  make everything a number
    let all = 0
    for(let i = 0; i < x.length; i++){
    all += Number(x[i])
    }
  
  //add everything in the array
  
    return all 
  }