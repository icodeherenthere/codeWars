var word = 'leon'

function isIt(word){
  let test =  '' + word + ''
  let result = test.split(' ').reverse()
  return console.log(result)
  if (test === result){
    return true
    }else{
    return false
    }
}return 