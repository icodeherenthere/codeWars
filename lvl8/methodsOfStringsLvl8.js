// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(string, separator) {
  // Split the input string into an array of words by spaces
  const wordsArray = string.split(' ');

  // Split each word into an array of characters, then join them back with the specified separator
  const processedWords = wordsArray.map(word => word.split('').join(separator));

  // Join all the processed words back into a sentence with spaces
  const resultString = processedWords.join(' ');

  return resultString;
}