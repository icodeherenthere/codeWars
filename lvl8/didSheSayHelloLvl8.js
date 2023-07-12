// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
  console.log(greetings)
  let arr = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  let check = greetings.toLowerCase();
  for(let i = 0; i < arr.length; i++){
    if (check === arr[i]){
        console.log(arr[i]);
        return true;
      } else if(check.includes(arr[i])){
        return true;
    }
   }
    return false
 }
