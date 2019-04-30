// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
console.log('******************')


function pyramid(n) {
    var pyr = [];
    var mid = Math.ceil(n/2);
    for (var i = 0; i < (n*2-1); i++) {
        pyr.push("_");
    }
    pyr[mid] = "#"
console.log(pyr)
}


pyramid(4)
console.log('******************')



module.exports = pyramid;
