// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

function sortArray(a1, a2) {

  const indexMap = {};

  a1.forEach((word, index) => {
      const firstLetter = word[0];
      if (!indexMap[firstLetter]) {
          indexMap[firstLetter] = [];
      }
      indexMap[firstLetter].push(index);
  });

  a2.sort((word1, word2) => {
      const firstLetter1 = word1[0];
      const firstLetter2 = word2[0];
      return indexMap[firstLetter1][0] - indexMap[firstLetter2][0];
  });

  return a2;
}