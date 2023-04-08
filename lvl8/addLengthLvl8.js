// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .


function addLength(str) {
  //start-here
    let arr = str.split(" ")
      for(let i = 0; i < arr.length; i++){
        arr[i] += " " + arr[i].length
      }
    return arr
  }
  