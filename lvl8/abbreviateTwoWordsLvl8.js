// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
  console.log(name)
  let partOne = name.split(' ')
  console.log(partOne)
  let partTwo = partOne.shift()
  console.log(partTwo)
  let partThree = partTwo.split('').shift()
  console.log(partThree)
  let start = partThree.toString()
  
  
  console.log(name)
  let nextOne = name.split(' ')
  console.log(nextOne)
  let nextTwo = nextOne.pop()
  console.log(nextTwo)
  let nextThree = nextTwo.split('').shift()
  console.log(nextThree)
  let fin = nextThree.toString()
    // code away
  let result = start + '.' + fin
  console.log(result)
  
  return result.toUpperCase()
}