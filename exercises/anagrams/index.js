// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();

  objA = {};
  objB = {};

  for ( let letter of stringA ) {
    if (objA[letter]) {
      objA[letter] ++;
    } else objA[letter] = 1;
  }

  for ( let letter of stringB ) {
    if (objB[letter]) {
      objB[letter] ++;
    } else objB[letter] = 1;
  }

  for (var key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
