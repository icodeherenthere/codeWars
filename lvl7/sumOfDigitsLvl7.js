// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.



function getSumOfDigits(integer) {
  var digits =  Math.floor(integer).toString().split('');
  console.log(digits.map(Number))
  let answer = digits.map(Number)
  const initialValue = 0;
  const sumWithInitial = answer.reduce(
   (accumulator, currentValue) => accumulator + currentValue,
   initialValue
 );
   return sumWithInitial;
}
