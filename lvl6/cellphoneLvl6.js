function presses(phrase) {
  // To do...
  let one = ['1']
  let two = ['A','B', "C", '2']
  let three = ['D','E', "F", '3']
  let four = ['G','H', "I", '4']
  let five = ['J','K', "L", '5']
  let six = ['M','N', "O", '6']
  let seven = ['P','Q', "R", 'S', '7']
  let eight = ['T','U', "V", '8']
  let nine = ['W','X', "Y", 'Z', '9']
  let zero = [' ', '0']
  let hash = ['#']
  let ast = ['*']
  
  let cellphone = [ one, two, three, four, five, six, seven, eight, nine, zero, hash, ast]
//   let letters = []
  
  
  let phraseUndo = phrase.split('')
  
  let numberOfPresses = 0
  
 console.log(phraseUndo, 'here')
 
  
  for(let i = 0; i < phraseUndo.length; i++){
    for(let j = 0; j < cellphone.length; j++){
      if(cellphone[j].includes(phraseUndo[i])){ // i = 0 ; j = 0; phraseUndo[0] = 'L'; cellphone[0][0] = 1; 
                                              // i = 0 ; j = 1; end;
                                              // i = 1 ; j = 0; phraseUndo[1] = 'O'; cellphone[1][0] = 'A';
          numberOfPresses += j + 1
      }

    } 
    
   }

   return numberOfPresses
}
console.log(presses('LOL'))