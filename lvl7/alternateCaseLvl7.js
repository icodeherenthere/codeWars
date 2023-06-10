// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}